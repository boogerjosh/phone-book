/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
    justifyContent: "space-between",
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
    display: "flex",
    padding: "1.5rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
    boxSizing: "border-box",
    width: "100%",
    flexDirection: "column",
  }),
  horizontalLine: css({
    backgroundColor: "hsl(var(--border))",
    width: "100%",
    height: "1px",
    marginTop: "1rem",
    marginBottom: "1rem",
  }),
  listLayout: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
    boxSizing: "border-box",
    width: "100%",
  }),
  profileImage: css({
    borderRadius: "9999px",
    overflow: "hidden",
    width: "4rem",
    flexShrink: "0",
    height: "4rem",
    display: "flex",
    backgroundColor: "rgb(156, 163, 175)",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "1.5rem",
  }),
  profileName: css({
    lineHeight: "1",
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "400px",
    wordWrap: "break-word",
  }),
  profileNumber: css({
    color: "rgb(37 99 235)",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    textAlign: "start",
    marginTop: "0.75rem",
    width: "100%",
    backgroundColor: "#EFF0EF",
    padding: ".5rem .5rem",
    borderRadius: ".5rem",
    boxSizing: "border-box",
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
  buttonSearch: css({
    background: "#FFFFFF",
    border: "none",
    borderRadius: ".5rem",
    boxSizing: "border-box",
    color: "#111827",
    fontFamily:
      "Inter var, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: ".75rem",
    lineHeight: "1.25rem",
    fontWeight: "600",
    textAlign: "center",
    textDecoration: "none #D1D5DB solid",
    textDecorationThickness: "auto",
    cursor: "pointer",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    hover: {
      backgroundColor: "rgb(249,250,251)",
    },
    padding: "0",
    display: "block",
  }),
  buttonDelete: css({
    backgroundColor: "rgb(225 29 72)",
    border: "none",
    borderRadius: ".5rem",
    boxSizing: "border-box",
    color: "white",
    fontFamily:
      "Inter var, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: ".75rem",
    lineHeight: "1.25rem",
    fontWeight: "600",
    textAlign: "center",
    textDecoration: "none #D1D5DB solid",
    textDecorationThickness: "auto",
    cursor: "pointer",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    hover: {
      backgroundColor: "rgb(249,250,251)",
    },
    padding: "0.25rem 0.5rem",
    display: "block",
  }),
};

const DetailViews = ({
  contact,
  contactDetailLoading,
  contactDetailError,
  deleteContact,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const router = useRouter();

  const _detailContacts =
    contact?.contact_by_pk === null ? "No data found" : contact;

  const favorites = useMemo(
    () => JSON.parse(localStorage.getItem("favorites")) || [],
    []
  );

  useEffect(() => {
    if (_detailContacts !== "No data found") {
      setIsInFavorites(
        favorites.some(
          (favorite) => favorite.id === _detailContacts?.contact_by_pk.id
        )
      );
    }
  }, [favorites, _detailContacts]);

  const handleClickFavorite = () => {
    setIsLoading(true);
    // Add the new contact to the favorites list
    favorites.push(_detailContacts?.contact_by_pk);

    // Save the updated favorites list back to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    router.push("/");

    toast.success("Succesfully added to favorite list");
  };

  const handleClickDelete = (id: number) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        // Check if the contact is in the favorites
        const isContactInFavorites = favorites.some(
          (contact) => contact.id === id
        );

        if (isContactInFavorites) {
          // If it is, remove it from the favorites
          const newFavorites = favorites.filter((contact) => contact.id !== id);

          // Save the updated favorites back to localStorage
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }

        // Then delete the contact
        await deleteContact(id);

        router.push("/");
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };

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
            {/* <button type="button" css={containerStyle.buttonEdit}>
              Edit
            </button> */}
          </div>

          <div css={containerStyle.cardContent}>
            <div
              css={containerStyle.horizontalLine}
              role="none"
              data-orientation="horizontal"
            />

            <div css={containerStyle.listLayout}>
              {contactDetailLoading ? (
                // Handle loading state
                <div css={containerStyle.noDataFound}>Loading...</div>
              ) : contactDetailError ? (
                // Handle error state
                <div css={containerStyle.noDataFound}>
                  Error: {contactDetailError.message}
                </div>
              ) : _detailContacts === "No data found" ? (
                // Handle no data found
                <div css={containerStyle.noDataFound}>No data found</div>
              ) : (
                // Map the data based on the query result
                <>
                  <span css={containerStyle.profileImage}>
                    {`${contact?.contact_by_pk?.first_name.charAt(
                      0
                    )}${contact?.contact_by_pk?.last_name.charAt(
                      0
                    )}`.toUpperCase()}
                  </span>
                  <div
                    style={{
                      marginTop: "1rem",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div css={containerStyle.profileName}>
                      {_detailContacts?.contact_by_pk.first_name ||
                      _detailContacts?.contact_by_pk.last_name
                        ? `${_detailContacts?.contact_by_pk.first_name || ""} ${
                            _detailContacts?.contact_by_pk.last_name || ""
                          }`.trim()
                        : "No Name"}
                    </div>
                    <div css={containerStyle.profileNumber}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        mobile {isInFavorites && "⭐"}
                      </span>
                      {_detailContacts?.contact_by_pk.phones.length === 0 ? (
                        <span
                          style={{
                            display: "block",
                          }}
                        >
                          No number
                        </span>
                      ) : (
                        _detailContacts?.contact_by_pk.phones.map(
                          (phone, idx) => (
                            <span
                              key={idx}
                              style={{
                                display: "block",
                              }}
                            >
                              {phone.number === ""
                                ? "*not number*"
                                : phone.number}
                            </span>
                          )
                        )
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "0.5rem",
                        justifyContent: "space-between",
                      }}
                    >
                      {!isInFavorites && (
                        <button
                          onClick={handleClickFavorite}
                          css={containerStyle.buttonSearch}
                          type="button"
                          disabled={isLoading}
                        >
                          Add to favorites⭐
                        </button>
                      )}
                      <button
                        css={containerStyle.buttonDelete}
                        type="button"
                        onClick={() =>
                          handleClickDelete(_detailContacts?.contact_by_pk.id)
                        }
                        disabled={isLoading}
                      >
                        {isLoading ? "Deleting..." : "Delete contact"}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailViews;
