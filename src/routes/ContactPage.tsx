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
import Button from "../components/Button";
import Input from "../components/Input";
import Link from "../components/Link";
import PageHeading from "../components/PageHeading";
import TextArea from "../components/TextArea";
import axios from "axios";

type ContactPageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ContactPage = (props: ContactPageProps) => {
  const [colorMode] = useColorMode();
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [email, setEmail] = useState("");
  const [startedFillingOut, setStartedFillingOut] = useState(false);
  const [touched, setTouched] = useState({
    contactEmail: false,
    contactName: false,
    messageSubject: false,
    messageContent: false,
    email: false,
  });
  const filloutTime = useRef(0);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      contactEmail: true,
    });
    setContactEmail(event.currentTarget.value);
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      contactName: true,
    });
    setContactName(event.currentTarget.value);
  };

  const handleSubjectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      messageSubject: true,
    });
    setMessageSubject(event.currentTarget.value);
  };

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setTouched({
      ...touched,
      messageContent: true,
    });
    setMessageContent(event.currentTarget.value);
  };

  const handleEmailHPChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      email: true,
    });
    setEmail(event.currentTarget.value);
  };

  const resetForm = () => {
    filloutTime.current = 0;
    setContactEmail("");
    setContactName("");
    setMessageSubject("");
    setMessageContent("");
    setStartedFillingOut(false);
    setTouched({
      contactEmail: false,
      contactName: false,
      messageSubject: false,
      messageContent: false,
      email: false,
    });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const emailParams = {
      to_email: contactEmail.trim(),
      name: contactName.trim(),
      subject: messageSubject.trim(),
      content: messageContent.trim(),
      website: email, // honeypot
      colorMode: colorMode,
    };
    try {
      const timeIsSus = filloutTime.current <= 5;
      const honeypotFilled = !!email;
      if (timeIsSus || honeypotFilled) {
      } else {
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_egbzb8n",
          template_id: "template_9rib1jm",
          user_id: "i1Cirl7T8ztv1fa3t",
          template_params: emailParams,
        });
      }
      resetForm();
      toast.success(
        "Success! You should receive a confirmation email shortly."
      );
      filloutTime.current = 0;
    } catch (error) {
      console.log(error);
      toast.error(
        "There was an error sending your contact info. Please try again."
      );
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
      <p>
        You can also email me directly at{" "}
        <Link href="mailto:amanda.everett.codes@gmail.com">
          amanda.everett.codes@gmail.com
        </Link>
      </p>
      <form
        action="submit"
        id="contactForm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      >
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
            gap: 3,
          }}
        >
          <Input
            required
            touched={touched.contactEmail}
            type="email"
            name="contactEmail"
            id="contactEmail"
            label="Email"
            value={contactEmail}
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
          />
          <div
            sx={{
              display: "inherit",
              position: "relative",
            }}
          >
            <Input
              required
              touched={touched.contactName}
              label="Your name"
              type="text"
              name="contactName"
              id="contactName"
              value={contactName}
              onChange={handleNameChange}
              onBlur={handleNameChange}
            />
          </div>
        </div>
        <Input
          required
          touched={touched.messageSubject}
          label="Subject"
          type="text"
          name="messageSubject"
          id="messageSubject"
          value={messageSubject}
          onChange={handleSubjectChange}
          onBlur={handleSubjectChange}
        />
        <Input
          touched={touched.email}
          label="Email"
          type="text"
          name="email"
          id="email"
          value={email}
          tabIndex={-1}
          autoComplete="off"
          onChange={handleEmailHPChange}
          onBlur={handleEmailHPChange}
          isHoneypot
        />
        <TextArea
          required
          touched={touched.messageContent}
          label="Message"
          name="messageContent"
          id="messageContent"
          rows={8}
          value={messageContent}
          minLength={1}
          maxLength={500}
          onChange={handleContentChange}
          onBlur={handleContentChange}
        ></TextArea>
        <p
          sx={{
            fontSize: "0.75rem",
            my: 0,
            paddingLeft: 2,
            opacity: 0.75,
          }}
        >
          Max length {messageContent.length}/500 characters
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
