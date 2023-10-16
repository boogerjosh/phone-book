import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";

const mockSetSearchQuery = jest.fn();

describe("SearchInput", () => {
  it("should call setSearchQuery when input value changes", () => {
    render(<SearchInput setSearchQuery={mockSetSearchQuery} />);

    const inputElement = screen.getByPlaceholderText("Search contact");

    fireEvent.change(inputElement, { target: { value: "search query" } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith("search query");
  });
});
