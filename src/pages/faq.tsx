import { GetStaticProps } from "next";
import { useEffect } from "react";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { connectDB } from "../connectDB";
import { FaqModel } from "../models/faq.model";

interface FaqProps {
  faq: FaqModel[];
}

const faq = ({ faq }: FaqProps) => {
  useEffect(() => {
    console.log(faq);
  }, []);
  return faq.map((f) => (
    <Accordion key={f.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{f.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{f.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectDB();
  const faq = await db.all("SELECT * FROM FAQ ORDER BY createdDate DESC");
  console.log("faq", faq);
  return { props: { faq } };
};

export default faq;
