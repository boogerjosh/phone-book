/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Link from "next/link";

import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import FavoriteContact from "../components/FavoriteContact";
import PaginationControls from "../components/PaginationControls";

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
  }),
  contentContainer: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    marginTop: "0.375rem",
  }),
  cardContent: css({
    paddingTop: "0",
    padding: "1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
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
    marginLeft: "0.5rem",
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
  }),
  gridLayout: css({
    // gap: "1rem",
    // display: "grid",
    overflowY: "auto",
  }),
  listLayout: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
  }),
  noDataFound: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "-.025em",
    lineHeight: "1",
    fontWeight: "600",
    height: "200px",
  }),
  linkView: css({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "calc(var(--radius) - 2px)",
    fontSize: ".75rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    color: "hsl(var(--primary-foreground))",
    textDecoration: "none",
    transitionProperty:
      "color,background-color,border-color,text-decoration-color,fill,stroke",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
    ":focus-visible": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
    boxShadow:
      "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    backgroundColor: "hsl(var(--primary))",
    ":hover": {
      backgroundColor: "rgb(148 163 184)",
      color: "hsl(var(--primary))",
    },
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingBottom: "0.25rem",
    paddingTop: "0.25rem",
  }),
  buttonAdd: css({
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
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      padding: "0.5rem 0.5rem",
    },
  }),
};

type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  phones: { number: string }[];
};

interface HomeViewProps {
  contacts: Contact[];
  loading: boolean;
  error: any;
  setSearchQuery: (query: string) => void;
  start: number,
  end: number
}

const HomeView: React.FC<HomeViewProps> = ({
  contacts,
  loading,
  error,
  setSearchQuery,
  start,
  end
}) => {
  // Load favorite contacts from localStorage
  const favoritesJson = localStorage.getItem("favorites");
  let favorites = favoritesJson ? JSON.parse(favoritesJson) : [];

  let isNotFavorites = contacts.filter((contact) => {
    // Check if the contact is not in the favorites list
    return !favorites.some((favorite) => favorite.id === contact.id);
  });

  // Filter contacts for the current page
  const _sliceContactPerPage = isNotFavorites.slice(start, end);
  
  return (
    <div css={containerStyle.containerWrapper}>
      <div css={containerStyle.contentContainer}>
        <div css={containerStyle.cardContainer}>
          <div css={containerStyle.cardHeader}>
            <div>
              <h3 css={containerStyle.headingCard}>
                Reach Out and Touch Someone
              </h3>
              <p css={containerStyle.textCard}>Your Universal Directory!</p>
            </div>
            <Link href="/form-contact" css={containerStyle.buttonAdd}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
              </svg>
            </Link>
          </div>
          <FavoriteContact favorites={favorites} />
          <div css={containerStyle.cardContent}>
            <div style={{ marginBottom: "1.5rem" }}>
              <SearchInput setSearchQuery={setSearchQuery} />

              <div
                css={containerStyle.horizontalLine}
                role="none"
                data-orientation="horizontal"
              />

              <div>
                <h4 css={containerStyle.headingCardContact}>Regular contact</h4>
                <div css={containerStyle.gridLayout}>
                  {loading ? (
                    // Handle loading state
                    <div css={containerStyle.noDataFound}>Loading...</div>
                  ) : error ? (
                    // Handle error state
                    <div css={containerStyle.noDataFound}>
                      Error: {error.message}
                    </div>
                  ) : isNotFavorites.length === 0 || _sliceContactPerPage.length == 0 ? (
                    // Handle no data found
                    <div css={containerStyle.noDataFound}>No data found</div>
                  ) : (
                    // Map the data based on the query result
                    <Card contacts={_sliceContactPerPage} />
                  )}
                </div>
                <PaginationControls
                  hasNextPage={end < isNotFavorites.length}
                  hasPrevPage={start > 0}
                  contactsLength={isNotFavorites.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
