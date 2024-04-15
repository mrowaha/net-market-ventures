import {z} from "zod";

export default z.object({
  firstName: z.string().trim().min(1, {message: "First Name cannot be blank"}),
  lastName: z.string().trim().min(1, {message: "Last Name cannot be blank"}),
  email: z.string().email(),
  message: z.string().trim().min(1, {message: "Message cannot be blank"})
})