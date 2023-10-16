import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

const mockContacts = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    phones: [{ number: "123-456-7890" }],
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    phones: [],
  },
];

describe("Card", () => {
  it("should render a list of contacts", () => {
    render(<Card contacts={mockContacts} />);

    const contactElements = screen.getAllByTestId("contact-card");
    expect(contactElements).toHaveLength(mockContacts.length);

    // Check if contact details are rendered correctly
    mockContacts.forEach((contact, index) => {
      const contactElement = contactElements[index];
      expect(contactElement).toBeInTheDocument();
      expect(contactElement).toHaveTextContent(
        `${contact.first_name || ""} ${contact.last_name || ""}`.trim()
      );
      expect(contactElement).toHaveTextContent(
        contact.phones.length === 0
          ? "No number"
          : contact.phones[0]?.number === ""
          ? "No number"
          : contact.phones[0]?.number
      );
    });
  });

  it('should render "No Name" for contacts with no name', () => {
    const contactsWithNoName = [
      {
        id: 3,
        first_name: "",
        last_name: "",
        phones: [],
      },
    ];
    render(<Card contacts={contactsWithNoName} />);

    const contactElement = screen.getByTestId("contact-card");
    expect(contactElement).toBeInTheDocument();
    expect(contactElement).toHaveTextContent("No Name");
  });

  it('should render "View" link for each contact', () => {
    render(<Card contacts={mockContacts} />);

    const viewLinks = screen.getAllByText("View");
    expect(viewLinks).toHaveLength(mockContacts.length);
  });
});
