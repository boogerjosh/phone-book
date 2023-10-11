import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import React from "react";

export const dynamic = "force-dynamic";

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

export default async function ServerSide() {
  const data = await getClient().query<Response>({
    query,
  });

  // console.log(data.data.contact);

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div>Hello</div>
    </main>
  );
}