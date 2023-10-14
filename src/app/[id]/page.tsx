import DetailPage from "@/module/detail";

const Detail = ({ params }) => {
  const idContact = Number(params.id);

  return <DetailPage idContact={idContact} />;
};

export default Detail;
