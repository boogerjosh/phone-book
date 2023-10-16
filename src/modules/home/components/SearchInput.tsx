/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";

const containerStyle = {
  inputField: css({
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderRadius: "calc(var(--radius) - 2px)",
    width: "100%",
    display: "flex",
    borderStyle: "solid",
    height: "2.25rem",
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
};

interface SearchInputProps {
  setSearchQuery: (query: string) => void;
}

const SearchInput = ({ setSearchQuery }: SearchInputProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <input
        css={containerStyle.inputField}
        placeholder="Search contact"
        type="text"
        onChange={handleSearch}
      />
      <div css={containerStyle.iconSearchSvg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
