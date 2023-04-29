import { z } from "zod";

// TYPES
export type SchemaKey = Extract<keyof typeof defaultValues, string>;

// CONSTANTS
export const MESSAGE_MAX_LENGTH = 500;

// DEFAULT VALUES
export const defaultValues = {
  email: "",
  message: "",
};

// SCHEMA
export const schema = {
  email: z
    .string()
    .email({
      message:
        "Please enter a valid email address",
    })
    .max(50, { message: "Must be 50 characters or less" }),
  message: z
    .string()
    .min(1, { message: "Please enter a message" })
    .max(MESSAGE_MAX_LENGTH, {
      message: `Must be ${MESSAGE_MAX_LENGTH} characters or less`,
    }),
};
