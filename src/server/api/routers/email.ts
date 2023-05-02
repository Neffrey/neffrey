// LIBRARIES
import { z } from "zod";
import axios from "axios";

// COMPONENTS
import { schema } from "~/components/forms/contactFormSchema";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";

export const emailRouter = createTRPCRouter({
  sendEmailToVisitor: publicProcedure
    .input(z.object({ email: schema.email, message: schema.message }))
    .mutation(async ({ input }) => {
      return await axios
        .post(`${env.SMTP2GO_API_URL}email/send`, {
          api_key: env.SMTP2GO_API_KEY,
          to: [`<${input.email}>`],
          sender: `Neffrey <${env.SMTP2GO_SENDER_EMAIL}>`,
          template_id: "5279818",
          custom_headers: [
            {
              header: "Reply-To",
              value: `Neffrey <${env.SMTP2GO_SENDER_EMAIL}>`,
            },
          ],
        })
        .then((response) => {
          console.log("sendEmailToVisitor success");
        })
        .catch((error) => {
          console.log("sendEmailToVisitor error");
        });
    }),
  sendEmailToMe: publicProcedure
    .input(z.object({ email: schema.email, message: schema.message }))
    .mutation(async ({ input }) => {
      return await axios
        .post(`${env.SMTP2GO_API_URL}email/send`, {
          api_key: env.SMTP2GO_API_KEY,
          to: [`<${env.SMTP2GO_SENDER_EMAIL}>`],
          sender: `Neffrey <${env.SMTP2GO_SENDER_EMAIL}>`,
          template_id: "1666319",
          template_data: {
            message: input.message,
          },
          custom_headers: [
            {
              header: "Reply-To",
              value: `Neffrey <${env.SMTP2GO_SENDER_EMAIL}>`,
            },
          ],
        })
        .then((response) => {
          console.log("sendEmailToVisitor success");
        })
        .catch((error) => {
          console.log("sendEmailToVisitor error");
        });
    }),
});
