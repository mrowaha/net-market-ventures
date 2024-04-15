import {z} from "zod"
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    GMAIL_PASSWORD: z.string(),
    GMAIL_APP: z.string()
  },
  runtimeEnv: {
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    GMAIL_APP: process.env.GMAIL_APP
  }
})