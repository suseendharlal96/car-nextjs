import { GetStaticProps } from "next";
import { useEffect } from "react";

import { connectDB } from "../connectDB";
import { FaqModel } from "../models/faq.model";

interface FaqProps {
  faq: FaqModel[];
}

const faq = ({ faq }: FaqProps) => {
  useEffect(() => {
    console.log(faq);
  }, []);
  return <div>{JSON.stringify(faq)}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectDB();
  const faq = await db.all("SELECT * FROM FAQ ORDER BY createdDate DESC");
  console.log(faq);
  return { props: { faq } };
};

export default faq;
