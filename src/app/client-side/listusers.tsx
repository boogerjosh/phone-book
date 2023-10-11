"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";

const query = gql`
  query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!], 
    $where: contact_bool_exp
) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by, 
      where: $where
  ){
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`;

interface Response {
  contact: { created_at: string; first_name: string; id: number, last_name: string, phones:  { phone: string }[]}[];
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);
  const { data, error } = useSuspenseQuery<Response>(query);

  console.log(data.contact, 'contacts')

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div>List Contacts</div>
    </main>
  );
}
