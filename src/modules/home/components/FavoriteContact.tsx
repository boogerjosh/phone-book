/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";
import Card from './Card';

const containerStyle = {
  cardContent: css({
    padding: "0rem 1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
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
    height: "100%",
    maxHeight: "200px",
  }),
  listLayout: css({
    display: "flex",
    alignItems: "center",
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
  noDataFound: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "-.025em",
    lineHeight: "1",
    fontWeight: "600",
    height: "100px",
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
  buttonEdit: css({
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
    padding: "0rem 1rem",
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
  }),
};

type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  phones: { number: string }[];
};

interface FavoriteContactProps {
  favorites: Contact[];
}

const FavoriteContact: React.FC<FavoriteContactProps> = ({ favorites }) => {
  return (
    <div css={containerStyle.cardContent}>
      <h4 css={containerStyle.headingCardContact}>Favorite contact⭐</h4>
      <div css={containerStyle.gridLayout}>
        {favorites.length === 0 ? (
          // Handle no data found
          <div css={containerStyle.noDataFound}>No favorites</div>
        ) : (
          // Map the data based on the query result
          <Card contacts={favorites} />
        )}
      </div>
    </div>
  );
};

export default FavoriteContact