"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useContactContext } from "@/contexts/ContactContext";
import { useRouter } from "next/navigation";

const containerStyle = {
  containerWrapper: css({
    display: "flex",
    alignItems: "start",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "0.625rem",
    paddingRight: "0.625rem",
    width: "100%",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
    minHeight: "100vh",
  }),
  contentContainer: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
  }),
  cardContainer: css({
    borderRadius: "calc(var(--radius) + 4px)",
    borderWidth: "1px",
    backgroundColor: "hsl(var(--card))",
    color: "hsl(var(--card-foreground))",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    maxWidth: "400px",
    width: "100%",
  }),
  cardHeader: css({
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  }),
  headingCard: css({
    letterSpacing: "-.025em",
    lineHeight: "1",
    fontWeight: "600",
  }),
  textCard: css({
    color: "hsl(var(--muted-foreground))",
    fontSize: ".8rem",
    lineHeight: "1.25rem",
    marginTop: "0.375rem",
  }),
  labelText: css({
    color: "hsl(var(--muted-foreground))",
    fontSize: ".8rem",
    lineHeight: "1.25rem",
    marginTop: "0",
    marginBottom: "0.75rem",
  }),
  cardContent: css({
    display: "flex",
    flexDirection: "column",
    paddingTop: "0",
    padding: "1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
    boxSizing: "border-box",
  }),
  inputField: css({
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    padding: "0.5rem",
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderRadius: "calc(var(--radius) - 2px)",
    borderStyle: "solid",
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
  }),
  buttonSearch: css({
    background: "#FFFFFF",
    border: "1px solid rgb(209,213,219)",
    borderRadius: ".5rem",
    boxSizing: "border-box",
    color: "#111827",
    fontFamily:
      "Inter var, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: ".875rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    padding: ".5rem .75rem",
    textAlign: "center",
    textDecoration: "none #D1D5DB solid",
    textDecorationThickness: "auto",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    hover: {
      backgroundColor: "rgb(249,250,251)",
    },
    focus: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
    focusVisible: {
      boxShadow: "none",
    },
    marginTop: "1rem",
    alignSelf: "flex-end"
  }),
  horizontalLine: css({
    backgroundColor: "hsl(var(--border))",
    width: "100%",
    height: "1px",
    marginTop: "1rem",
    marginBottom: "1rem",
  }),
  headingCardContact: css({
    fontWeight: "500",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    marginBottom: "1rem",
  }),
  gridLayout: css({
    // gap: "1rem",
    // display: "grid",
  }),
  listLayout: css({
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: "1rem",
  }),
  profileImage: css({
    borderRadius: "9999px",
    overflow: "hidden",
    width: "2.5rem",
    flexShrink: "0",
    height: "2.5rem",
    display: "flex",
    backgroundColor: "rgb(156, 163, 175)",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  }),
  profileName: css({
    lineHeight: "1",
    fontWeight: "500",
    fontSize: ".875rem",
  }),
  profileNumber: css({
    color: "hsl(var(--muted-foreground))",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
  }),
  iconSearchSvg: css({
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "25px",
    height: "25px",
  }),
  noDataFound: css({
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "-.025em",
    lineHeight: "1",
    fontWeight: "600",
  }),
  fieldSet: css({
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
  }),
  buttonAddNumberInput: css({
    background: "rgb(203 213 225)",
    border: "1px solid rgb(209,213,219)",
    borderRadius: ".5rem",
    boxSizing: "border-box",
    color: "#111827",
    fontFamily:
      "Inter var, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: ".75rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    textDecoration: "none #D1D5DB solid",
    textDecorationThickness: "auto",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem",
    marginTop: "0.75rem",
  }),
  deleteButton: css({
    background: "rgb(203 213 225)",
    border: "1px solid rgb(209,213,219)",
    borderRadius: ".5rem",
    boxSizing: "border-box",
    color: "#111827",
    fontFamily:
      "Inter var, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: ".75rem",
    fontWeight: "600",
    lineHeight: "1.25rem",
    textAlign: "center",
    textDecoration: "none #D1D5DB solid",
    textDecorationThickness: "auto",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem",
    marginBottom: "0.75rem",
    marginLeft: "0.25rem",
  }),
  errorMessage: css({
    color: "rgb(239 68 68)",
  }),
};

const FormView = () => {
  const { addContact } = useContactContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const handleDelete = (index) => {
    setPhoneNumbers((prevPhoneNumbers) => {
      // Use filter to remove the phone number at the specified index
      return prevPhoneNumbers.filter((_, i) => i !== index);
    });
  };

  const handleNameChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handlePhoneNumberChange = (index) => (event) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = event.target.value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const validate = () => {
    let tempErrors = {};

    // Get existing contacts from localStorage
    const savedContacts = localStorage.getItem("contacts");
    const contacts = savedContacts ? JSON.parse(savedContacts) : [];

    // Validate first name
    if (!firstName) {
      tempErrors.firstName = "First name is required.";
    } else if (firstName && !/^[a-zA-Z]+$/.test(firstName)) {
      tempErrors.firstName = "First name cannot contain special characters.";
    } else if (contacts.some((contact) => contact.first_name === firstName)) {
      tempErrors.firstName = "Name must be unique.";
    }

    // Validate last name
    if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
      tempErrors.lastName = "Last name cannot contain special characters.";
    }

    // Validate phone numbers
    phoneNumbers.forEach((phoneNumber, index) => {
      if (!phoneNumber) {
        tempErrors[`phoneNumber${index}`] = "Phone number is required.";
      }
    });

    setErrorsMessage(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      // Create a contact object
      const contact = {
        first_name: firstName,
        last_name: lastName,
        phones: phoneNumbers.map((number) => ({ number })),
      };

      setIsLoading(true);

      // Call addContact with the contact object after a delay
      setTimeout(async () => {
        try {
          await addContact(contact);
          // Clear the form
          setFirstName("");
          setLastName("");
          setPhoneNumbers([""]);

          setIsLoading(false);

          router.push("/");
        } catch (err) {
          console.error(err);
        }
      }, 1000); // Delay of 1000ms
    }
  };

  return (
    <div css={containerStyle.containerWrapper}>
      <div css={containerStyle.contentContainer}>
        <div css={containerStyle.cardContainer}>
          <div css={containerStyle.cardHeader}>
            <h3 css={containerStyle.headingCard}>New Contact Form</h3>
            <p css={containerStyle.textCard}>
              Add new connections! This is where you begin weaving your web of
              contacts. Fill in the details and let's help you keep track of
              your expanding network.
            </p>
          </div>

          <div css={containerStyle.cardContent}>
            <div
              css={containerStyle.horizontalLine}
              role="none"
              data-orientation="horizontal"
            />

            <div
              style={{
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <form onSubmit={handleSubmit}>
                <fieldset css={containerStyle.fieldSet}>
                  <legend css={containerStyle.headingCardContact}>
                    Fill the form
                  </legend>
                  <label htmlFor="firstName" css={containerStyle.labelText}>
                    First Name
                    <input
                      autoFocus
                      css={containerStyle.inputField}
                      type="text"
                      id="firstName"
                      name="firstName"
                      tabIndex={1}
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleNameChange}
                    />
                    {errorsMessage.firstName && (
                      <div css={containerStyle.errorMessage}>
                        {errorsMessage.firstName}
                      </div>
                    )}
                  </label>
                  <label htmlFor="firstName" css={containerStyle.labelText}>
                    Last Name
                    <input
                      css={containerStyle.inputField}
                      type="text"
                      id="lastName"
                      name="lastName"
                      tabIndex={1}
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleNameChange}
                    />
                    {errorsMessage.lastName && (
                      <div css={containerStyle.errorMessage}>
                        {errorsMessage.lastName}
                      </div>
                    )}
                  </label>
                  {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index}>
                      <label
                        htmlFor={`number${index}`}
                        css={containerStyle.labelText}
                      >
                        Number {index + 1}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input
                            css={containerStyle.inputField}
                            type="text"
                            id={`number${index}`}
                            name={`number${index}`}
                            tabIndex={2 + index}
                            placeholder="Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange(index)}
                          />
                          {index !== 0 && (
                            <button
                              type="button"
                              css={containerStyle.deleteButton}
                              onClick={() => handleDelete(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0 0 30 30"
                              >
                                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                              </svg>
                            </button>
                          )}
                        </div>
                        {errorsMessage[`phoneNumber${index}`] && (
                          <div css={containerStyle.errorMessage}>
                            {errorsMessage[`phoneNumber${index}`]}
                          </div>
                        )}
                      </label>
                    </div>
                  ))}
                  <button
                    type="button"
                    css={containerStyle.buttonAddNumberInput}
                    onClick={handleAddPhoneNumber}
                  >
                    Add another phone number
                  </button>
                </fieldset>

                <button type="submit" css={containerStyle.buttonSearch}>
                  {isLoading ? "Saving..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;
