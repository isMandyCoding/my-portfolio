/** @jsxImportSource theme-ui */
import React, { ChangeEventHandler, useState } from "react";
import Input from "../components/Input";
import PageHeading from "../components/PageHeading";
import TextArea from "../components/TextArea";

const ContactPage = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setContactEmail(event.currentTarget.value);
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setContactName(event.currentTarget.value);
  };

  const handleSubjectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessageSubject(event.currentTarget.value);
  };

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessageContent(event.currentTarget.value);
  };

  return (
    <div
      sx={{
        m: 4,
      }}
    >
      <PageHeading headingText="Contact Me" />
      <h2 sx={{ font: "body", opacity: 0.75 }}>
        I'm interested in new opportunities.
      </h2>
      <form
        action="submit"
        id="contactForm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
            gap: 2,
          }}
        >
          <Input
            required
            type="email"
            name="contactEmail"
            id="contactEmail"
            label="Email"
            value={contactEmail}
            onChange={handleEmailChange}
          />
          <div
            sx={{
              display: "inherit",
              position: "relative",
            }}
          >
            <Input
              required
              label="Your name"
              type="text"
              name="contactName"
              id="contactName"
              value={contactName}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <Input
          required
          label="Subject"
          type="text"
          name="messageSubject"
          id="messageSubject"
          value={messageSubject}
          onChange={handleSubjectChange}
        />
        <TextArea
          required
          label="Message"
          name="messageContent"
          id="messageContent"
          cols={30}
          rows={10}
          value={messageContent}
          onChange={handleContentChange}
        ></TextArea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
