"use client";

import DetailViews from "./views";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useContactContext } from "@/contexts/ContactContext";
import { useEffect } from "react";

const DetailPage = ({ idContact }) => {
  const {
    contactDetailLoading,
    contactDetailError,
    contactDetailData,
    setIdContact,
    deleteContact
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
        deleteContact={deleteContact}
      />
    </MaxWidthWrapper>
  );
};

export default DetailPage;
