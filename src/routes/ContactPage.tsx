/** @jsxImportSource theme-ui */
import React, {
  ChangeEventHandler,
  FormEventHandler,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { SxProp, useColorMode } from "theme-ui";
import AppAxios from "../common/utils/AppAxios";
import Button from "../components/Button";
import Input from "../components/Input";
import PageHeading from "../components/PageHeading";
import TextArea from "../components/TextArea";

type ContactPageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ContactPage = (props: ContactPageProps) => {
  const [colorMode] = useColorMode();
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [email, setEmail] = useState("");
  const [startedFillingOut, setStartedFillingOut] = useState(false);
  const filloutTime = useRef(0);

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

  const handleEmailClick: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = {
      email: contactEmail.trim(),
      name: contactName.trim(),
      subject: messageSubject.trim(),
      content: messageContent.trim(),
      website: email, // honeypot
      colorMode: colorMode,
      formTime: filloutTime.current,
    };
    try {
      await AppAxios.post("/contact", formData);
      setStartedFillingOut(false);
      toast.success("Success! You should receive a confirmation email shortly.", {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: colorMode ===  "dark" ? colorMode : "light"
      });
    } catch (error) {
      toast.error("There was an error sending your contact info. Please try again.", {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: colorMode ===  "dark" ? colorMode : "light"
        
      });
    }
  };

  const handleFormChange = () => {
    if (!startedFillingOut) {
      setStartedFillingOut(true);
    }
  };
  useEffect(() => {
    let interval: null | NodeJS.Timer = null;
    if (startedFillingOut) {
      interval = setInterval(() => {
        filloutTime.current = filloutTime.current + 1;
      }, 1000);
    } else if (!startedFillingOut && filloutTime.current !== 0 && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval ?? undefined);
  }, [startedFillingOut, filloutTime]);

  return (
    <section id="contactpage" className={props.className}>
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
        onChange={handleFormChange}
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
        <Input
          label="Email"
          type="text"
          name="email"
          id="email"
          value={email}
          tabIndex={-1}
          autoComplete="off"
          onChange={handleEmailClick}
          isHoneypot
        />
        <TextArea
          required
          label="Message"
          name="messageContent"
          id="messageContent"
          rows={10}
          value={messageContent}
          minLength={1}
          maxLength={500}
          onChange={handleContentChange}
        ></TextArea>
        <p
          sx={{
            fontSize: "0.75rem",
            my: 0,
            paddingLeft: 2,
            opacity: 0.75,
          }}
        >
          Max length 500 characters
        </p>
        <div
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
