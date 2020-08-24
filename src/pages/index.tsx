import React from "react";
import { GetServerSideProps } from "next";

import { Makers, getMakers } from "../database/makers";

interface HomeProps {
  makers: Makers[];
}

const index = ({ makers }: HomeProps) => {
  return <div>{JSON.stringify(makers, null, 4)}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const makers = await getMakers();
  return {
    props: { makers },
  };
};

export default index;
