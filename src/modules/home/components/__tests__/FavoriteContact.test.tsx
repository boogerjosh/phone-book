import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteContact from "../FavoriteContact";
import Card from "../Card";

const mockFavorites = [
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

describe("FavoriteContact", () => {
  it('should render the heading and "No favorites" message when favorites array is empty', () => {
    render(<FavoriteContact favorites={[]} />);

    const heading = screen.getByText("Favorite contact⭐");
    const noFavoritesMessage = screen.getByText("No favorites");

    expect(heading).toBeInTheDocument();
    expect(noFavoritesMessage).toBeInTheDocument();
  });

  it("should render the heading and Card component when favorites array is not empty", () => {
    render(<FavoriteContact favorites={mockFavorites} />);

    const heading = screen.getByText("Favorite contact⭐");
    const cardComponents = screen.getAllByTestId("contact-card");

    expect(heading).toBeInTheDocument();
    expect(cardComponents.length).toBe(mockFavorites.length);
  });
});
