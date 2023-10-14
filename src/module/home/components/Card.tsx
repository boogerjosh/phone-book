
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from 'next/link';

const containerStyle = {
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
    "@media (max-width: 768px)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "120px",
    },
  }),
  profileNumber: css({
    color: "hsl(var(--muted-foreground))",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    "@media (max-width: 768px)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100px",
    },
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
};

const Card = ({ contacts }) => {   
  
  return (
    <>
      {contacts.map((contact, index) => (
        <div css={containerStyle.listLayout} key={index}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span css={containerStyle.profileImage}>
              {`${contact.first_name.charAt(0)}${contact.last_name.charAt(
                0
              )}`.toUpperCase()}
            </span>
            <div style={{ marginLeft: "1rem" }}>
              <div css={containerStyle.profileName}>
                {contact.first_name || contact.last_name
                  ? `${contact.first_name || ""} ${
                      contact.last_name || ""
                    }`.trim()
                  : "No Name"}
              </div>
              <div css={containerStyle.profileNumber}>
                {contact.phones[0]?.number}
              </div>
            </div>
          </div>
          <Link href={`/${contact.id}`} css={containerStyle.linkView}>
            View
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card