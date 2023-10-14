"use client";

import DetailViews from "./views";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useContactContext } from "@/contexts/ContactContext";
import { useEffect, useState } from "react";

const DetailPage = ({ idContact }) => {
  const {
    contactDetailLoading,
    contactDetailError,
    contactDetailData,
    setIdContact,
  } = useContactContext();

  useEffect(() => {
     setIdContact(idContact);
  }, [idContact, contactDetailData]);

  return (
    <MaxWidthWrapper>
      <DetailViews
        contact={contactDetailData}
        contactDetailLoading={contactDetailLoading}
        contactDetailError={contactDetailError}
      />
    </MaxWidthWrapper>
  );
};

export default DetailPage;
