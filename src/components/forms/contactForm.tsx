// LIBRARIES
import { type BaseSyntheticEvent, type FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";

// TRPC
import { api } from "~/utils/api";

// COMPONENTS
import {
  type SchemaKey,
  defaultValues,
  MESSAGE_MAX_LENGTH,
  schema,
} from "~/components/forms/contactFormSchema";
import ContactFormSuccess from "~/components/forms/contactFormSuccess";

// COMPONENT
const ContactForm = () => {
  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // RHF
  const {
    getValues,
    register,
    setFocus,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // tRPC
  const sendEmailToMe = api.email.sendEmailToMe.useMutation({
    onSuccess: () => {
      console.log("sendEmailToMe Success");
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    onError: (error) => {
      console.log("sendEmailToMe Error", error);
      setIsSubmitting(false);
    },
  });
  const sendEmailToVisitor = api.email.sendEmailToVisitor.useMutation({
    onSuccess: () => {
      console.log("sendEmailToVisitor Success");
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    onError: (error) => {
      console.log("sendEmailToVisitor Error", error);
      setIsSubmitting(false);
    },
  });

  // Handle Field Validation
  const validateField = (field: SchemaKey, value: string) => {
    clearErrors(field);
    const result = schema[field].safeParse(value);
    if (!result.success) {
      setError(field, { message: result.error.formErrors.formErrors[0] });
    }
  };

  // Handle Submit
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    validateField("email", getValues("email"));
    validateField("message", getValues("message"));
    if (!errors.email && !errors.message) {
      sendEmailToMe.mutate(getValues());
      sendEmailToVisitor.mutate(getValues());
      setIsSubmitting(true);
    }
  };

  if (isSuccess) return <ContactFormSuccess />;
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex w-full flex-col justify-start"
      >
        <label
          htmlFor="email"
          onClick={() => setFocus("email")}
          className="w-full pb-1 text-lg lowercase tracking-wider"
        >
          {`Email address`}
        </label>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full rounded-md p-2 text-base text-black placeholder-black/80"
          {...register("email", {
            onBlur: (event: FocusEvent<HTMLInputElement>) =>
              validateField(event.target.name as SchemaKey, event.target.value),
          })}
        />
        <div className="p-2" />
        <label
          htmlFor="message"
          onClick={() => setFocus("message")}
          className="w-full pb-1 text-lg lowercase tracking-wider"
        >
          {`Message`}
        </label>
        <textarea
          placeholder="Send me a quick message letting me know what you wanna chat about. I'll get back to ya :)"
          className="w-full min-w-full rounded-md p-2 text-base text-black placeholder-black/80"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          {...register("message", {
            onBlur: (event: FocusEvent<HTMLInputElement>) =>
              validateField(event.target.name as SchemaKey, event.target.value),
          })}
        />
        <div className="p-2" />
        <input
          type="submit"
          value="Send Message"
          className="btn-accent btn w-full text-lg font-semibold tracking-wider text-white"
        />
        <div className="p-2" />
        <button
          className="text-md btn-accent btn w-full font-semibold tracking-wider text-white"
          onClick={() => console.log("Log Bools", { isSubmitting })}
        >
          Log Bools:
        </button>
      </form>
    </>
  );
};

export default ContactForm;
