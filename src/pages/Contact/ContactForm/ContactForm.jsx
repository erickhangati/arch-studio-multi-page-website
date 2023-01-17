import React, { useState, useRef, useEffect } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

import ArrowButton from "../../../components/UI/ArrowButton/ArrowButton";
import LoadingSpinner from "./LoadingSpinner";
import { delay } from "../../../util/delay";
import SuccessAnimation from "./SuccessAnimation";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  // Select input elements.
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  // Input error states.
  const [inputError, setInputError] = useState({
    name: null,
    email: null,
    message: null,
  });

  // Success state.
  const [showSuccess, setShowSuccess] = useState(false);

  // Get form data submitted.
  const formData = useActionData();

  // Initialize navigation state.
  const navigation = useNavigation();

  useEffect(() => {
    if (formData) {
      setShowSuccess(() => true);
    }

    setTimeout(() => {
      setShowSuccess(() => false);
    }, 5000);

    // return () => clearTimeout;
  }, [formData, setShowSuccess]);

  // Set error state on name input.
  const nameChangeHandler = () => {
    if (!inputError.name) return;

    setInputError((previous) => {
      return {
        ...previous,
        name: null,
      };
    });
  };

  // Set error state on email input.
  const emailChangeHandler = () => {
    if (!inputError.email) return;

    setInputError((previous) => {
      return {
        ...previous,
        email: null,
      };
    });
  };

  // Set error state on message input.
  const messageChangeHandler = () => {
    if (!inputError.message) return;

    setInputError((previous) => {
      return {
        ...previous,
        message: null,
      };
    });
  };

  const formSubmitHandler = (e) => {
    // Check if email format is valid
    let emailIsValid;
    if (emailInput.current.value.length > 0) {
      emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailInput.current.value
      );
    }

    // Check name input if empty and set error in state.
    if (nameInput.current.value.length === 0) {
      setInputError((previous) => {
        return {
          ...previous,
          name: "Can't be empty!",
        };
      });

      // Prevent form submission
      e.preventDefault();
    }

    // Check email input if empty and set error in state.
    if (emailInput.current.value.length === 0) {
      setInputError((previous) => {
        return {
          ...previous,
          email: "Can't be empty!",
        };
      });

      // Prevent form submission
      e.preventDefault();
    }

    // Check email format is invalid and set error in state.
    else if (!emailIsValid) {
      setInputError((previous) => {
        return {
          ...previous,
          email: "Email format invalid!",
        };
      });

      // Prevent form submission
      e.preventDefault();
    }

    // Check message input if empty and set error in state.
    if (messageInput.current.value.length === 0) {
      setInputError((previous) => {
        return {
          ...previous,
          message: "Can't be empty!",
        };
      });

      // Prevent form submission
      e.preventDefault();
    }
  };

  return (
    <section className={styles["contact-form"]}>
      <h3>Connect with us</h3>

      {/* Render Loading Spinner */}
      {navigation.state === "submitting" && <LoadingSpinner />}

      {/* Render Success Animation Icon */}
      {showSuccess && <SuccessAnimation />}

      {/* Render contact form. */}
      {!(navigation.state === "submitting") && !showSuccess && (
        <Form method="post" action="/contact" onSubmit={formSubmitHandler}>
          <div
            // Set normal class and error class in name input error.
            className={`${styles["contact-form__input-control"]}${
              inputError.name ? ` ${styles.active}` : ""
            }`}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={nameChangeHandler}
              ref={nameInput}
            />

            {/* Render error */}
            {inputError.name && <span>{inputError.name}</span>}
          </div>

          <div
            // Set normal class and error class in email input error.
            className={`${styles["contact-form__input-control"]}${
              inputError.email ? ` ${styles.active}` : ""
            }`}
          >
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={emailChangeHandler}
              ref={emailInput}
            />

            {/* Render error */}
            {inputError.email && <span>{inputError.email}</span>}
          </div>

          <div
            // Set normal class and error class in message input error.
            className={`${styles["contact-form__input-control"]}${
              inputError.message ? ` ${styles.active}` : ""
            }`}
          >
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              onChange={messageChangeHandler}
              ref={messageInput}
            />

            {/* Render error */}
            {inputError.message && <span>{inputError.message}</span>}
          </div>
          <ArrowButton />
        </Form>
      )}
    </section>
  );
};

export default ContactForm;

export const action = async ({ request }) => {
  // Receive form input data.
  const formData = await request.formData();

  // Transform data into object.
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Simulate some delay to show loading spinner.
  await delay(2000);

  return data;
};
