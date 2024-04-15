import { env } from "@/env";
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import contactSchema from "@/lib/schema/contact";
import { ZodError } from "zod";

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, '10s')
});

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const ip = req.connection.remoteAddress;
    if (ip === undefined) {
      return res.status(500).json({success: false, message: 'Failed to get ip'});
    }
    const {limit, reset, remaining} = await ratelimit.limit(ip!);
    if (remaining === 0) {
      return res.status(429).json({success: false, message: 'Rate limit exceeded'});
    }

    const {data} = JSON.parse(req.body);
    let content;
    try {
      content = contactSchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({success: false, message: "invalid request body"})
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false,
      auth: {
        user: env.GMAIL_APP,
        pass: env.GMAIL_PASSWORD
      }
    })
    try {
      await transporter.sendMail({
        from: `"Message bot" <${env.GMAIL_APP}>`,
        to: env.GMAIL_APP,
        subject: `Message from ${content!.firstName} ${content!.lastName} <${content!.email}>`,
        text: content?.message,
      })
      return res.status(200).json({ success: true })
    } catch (err) {
      return res.status(500).json({ success: false, message: "failed to send email" })
    }
  }
}