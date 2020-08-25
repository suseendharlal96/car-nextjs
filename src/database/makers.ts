import { connectDB } from "../connectDB";

export interface Makers {
  make: string;
  count: number;
}

export const getMakers = async () => {
  const db = connectDB();
  const makers = (await db).all(
    "SELECT make,count(*) as count FROM Car GROUP BY make"
  );
  return makers;
};
