// LIBRARIES
import React from "react";

// COMPONENT
const ContactFormSuccess = ({ className = "" }) => {
  return (
    <div className={className}>
      {"Your message was sent!"}
      <br />
      {"I'll get back to you as soon as possible"}
    </div>
  );
};
export default ContactFormSuccess;
