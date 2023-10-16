"use client";

import { useContactContext } from "@/contexts/ContactContext";
import HomeView from "./views";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const HomePage = ({ searchParams }) => {
  const { contacts, setContacts, loading, error, setSearchQuery } =
    useContactContext();

  // Pagination  
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  let start = (Number(page) - 1) * Number(per_page);
  let end = start + Number(per_page);  

  if (start >= contacts.length) {
    // Kalo start lebih besar atau sama dengan jumlah kontak yang ada, atur start menjadi 0
    start = 0;
  }

  if (end > contacts.length) {
    // Kalo end melebihi jumlah kontak yang ada, atur end menjadi jumlah kontak
    end = contacts.length;
  }

  return (
    <MaxWidthWrapper>
      <HomeView
        contacts={contacts}
        loading={loading}
        error={error}
        setSearchQuery={setSearchQuery}
        start={start}
        end={end}
      />
    </MaxWidthWrapper>
  );
};

export default HomePage;
