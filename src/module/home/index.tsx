"use client";

import { useContactContext } from "@/contexts/ContactContext";
import HomeView from "./views";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const HomePage = () => {
  const { contacts, setContacts, loading, error, setSearchQuery } =
    useContactContext();

  return (
    <MaxWidthWrapper>
      <HomeView
        contacts={contacts}
        loading={loading}
        error={error}
        setSearchQuery={setSearchQuery}
      />
    </MaxWidthWrapper>
  );
};

export default HomePage;
