import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import PaginationControls from "../PaginationControls";

// Mock the useRouter function
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("PaginationControls", () => {
  it("renders PaginationControls with prev and next buttons", () => {
    const hasNextPage = true;
    const hasPrevPage = true;
    const contactsLength = 20;

    render(
      <PaginationControls
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        contactsLength={contactsLength}
      />
    );

    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("disables Prev button when hasPrevPage is false", () => {
    const hasNextPage = true;
    const hasPrevPage = false;
    const contactsLength = 20;

    render(
      <PaginationControls
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        contactsLength={contactsLength}
      />
    );

    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it("disables Next button when hasNextPage is false", () => {
    const hasNextPage = false;
    const hasPrevPage = true;
    const contactsLength = 20;

    render(
      <PaginationControls
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        contactsLength={contactsLength}
      />
    );

    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it("calls router.push with the correct URL when Prev and Next buttons are clicked", () => {
    const hasNextPage = true;
    const hasPrevPage = true;
    const contactsLength = 20;

    render(
      <PaginationControls
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        contactsLength={contactsLength}
      />
    );

    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");

    fireEvent.click(prevButton);
    expect(useRouter().push).toHaveBeenCalledWith("/?page=1&per_page=10");

    fireEvent.click(nextButton);
    expect(useRouter().push).toHaveBeenCalledWith("/?page=2&per_page=10");
  });
});
