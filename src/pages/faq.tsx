import { GetStaticProps } from "next";

import { connectDB } from "../connectDB";
import { FaqModel } from "../models/faq.model";

interface FaqProps {
  faq: FaqModel[];
}

const faq = ({ faq }: FaqProps) => {
  return <div>{JSON.stringify(faq)}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectDB();
  const faq = db.all("SELECT * FROM FAQ ORDER BY createdDate DESC");
  return { props: { faq } };
};

export default faq;
