"use client";

import { useContactContext } from "@/contexts/ContactContext";
import HomeView from "./views";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const HomePage = ({ searchParams }) => {
  const { contacts, setContacts, loading, error, setSearchQuery } =
    useContactContext();

  return (
    <MaxWidthWrapper>
      <HomeView
        contacts={contacts}
        loading={loading}
        error={error}
        setSearchQuery={setSearchQuery}
        searchParams={searchParams}
      />
    </MaxWidthWrapper>
  );
};

export default HomePage;
