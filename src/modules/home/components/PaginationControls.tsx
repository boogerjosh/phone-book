/** @jsxImportSource @emotion/react */
'use client'

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { css } from "@emotion/react";

const containerStyle = {
  buttonPagination: css({
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
    padding: "0.25rem 0.5rem",
  }),
};

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  contactsLength: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  contactsLength,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "10";

  const maxPages = Math.ceil(contactsLength / Number(per_page));

  // Apakah page lebih besar dari jumlah maksimum halaman yang sesuai
  if (Number(page) > maxPages) {
    page = maxPages.toString();
  }

  return (
    <div
      className="flex gap-2"
      style={{
        display: "flex",
        gap: "0.5rem",
        width: "100%",
        justifyContent: "flex-end",
        marginTop: "1rem",
        alignItems: "center",
      }}
    >
      <button
        css={containerStyle.buttonPagination}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        Prev
      </button>

      <div>
        {page} / {maxPages}
      </div>

      <button
        css={containerStyle.buttonPagination}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls