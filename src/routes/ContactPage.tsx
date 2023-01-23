/** @jsxImportSource theme-ui */
import axios from "axios";
import React, {
  ChangeEventHandler,
  FormEventHandler,
  HTMLAttributes,
  useState,
} from "react";
import { SxProp } from "theme-ui";
import AppAxios from "../common/utils/AppAxios";
import Button from "../components/Button";
import Input from "../components/Input";
import PageHeading from "../components/PageHeading";
import TextArea from "../components/TextArea";

type ContactPageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ContactPage = (props: ContactPageProps) => {
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

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("For submitted");
    console.log(e);
    const formData = {
      email: contactEmail,
      name: contactName,
      subject: messageSubject,
      content: messageContent,
    };
    console.log(formData);
    try {
      // const authentication = await AppAxios.get("/sanctum/csrf-cookie");
      const result = await AppAxios.post("test", formData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contactpage" className={props.className}>
      <PageHeading
        href="contact"
        headingText="Contact Me"
        subHeadingText="I'm interested in new opportunities."
      />
      <form
        action="submit"
        id="contactForm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={handleFormSubmit}
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
          rows={10}
          value={messageContent}
          onChange={handleContentChange}
        ></TextArea>
        <div
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
