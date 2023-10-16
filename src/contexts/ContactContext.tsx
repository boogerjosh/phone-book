"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import toast from "react-hot-toast";

import { GET_CONTACT_LIST } from "@/graphql/GetContactList";
import { ADD_CONTACT_WITH_PHONES } from "@/graphql/AddContactWithPhones";
import { GET_CONTACT_DETAIL } from "@/graphql/GetContactDetail ";
import { DELETE_CONTACT } from "@/graphql/DeleteContactDetail";

// Create a context for managing contact data
const ContactContext = createContext();

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
};

export const ContactProvider: React.FC = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState(() => {
  if (typeof window !== 'undefined') {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
    } else {
      return [];
    }
  });

  const [idContact, setIdContact] = useState(null);

  const { loading, error, data } = useQuery(GET_CONTACT_LIST, {
    variables: {
      where: {
        first_name: { _like: `%${searchQuery}%` },
      },
    },
  });
  const [addContact] = useMutation(ADD_CONTACT_WITH_PHONES);
  const {
    loading: contactDetailLoading,
    error: contactDetailError,
    data: contactDetailData,
  } = useQuery(GET_CONTACT_DETAIL, {
    variables: { id: idContact },
    skip: !idContact, // Skip the query if idContact is null
  });
  const [deleteContact] = useMutation(DELETE_CONTACT);

  useEffect(() => {
    if (!loading && !error && data) {
      // Update the contacts state with the fetched data
      setContacts(data.contact);
    }
  }, [loading, error, data]);

  const handleAddContact = async (contact) => {
    try {
      const { data } = await addContact({
        variables: contact,
      });

      // Update the contacts state with the new contact
      const newContacts = [...contacts, data.insert_contact.returning[0]];
      setContacts(newContacts);

      // Save the updated contacts data to localStorage
      localStorage.setItem("contacts", JSON.stringify(newContacts));

      toast.success("Successfully saved!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      const { data } = await deleteContact({ variables: { id } });

      // Get the current favorites from localStorage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      // Filter out the deleted contact
      const newFavorites = favorites.filter((contactId) => contactId !== id);

      // Save the updated favorites back to localStorage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      // Remove the deleted contact from the contacts state
      const newContacts = contacts.filter(
        (contact) => contact.id !== data.delete_contact_by_pk.id
      );
      setContacts(newContacts);

      // Save the updated contacts data to localStorage
      localStorage.setItem("contacts", JSON.stringify(newContacts));

      toast.success("Successfully deleted!");
    } catch (err) {
      console.error(err);
    }
  };

  // Provide the state and the setter function to the context
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        loading,
        error,
        setSearchQuery,
        addContact: handleAddContact,
        deleteContact: handleDeleteContact,
        contactDetailData,
        contactDetailLoading,
        contactDetailError,
        setIdContact, // Add this line
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
