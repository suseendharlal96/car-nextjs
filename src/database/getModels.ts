import { connectDB } from "../connectDB";

export interface Models {
  model: string;
  count: number;
}

export const getModels = async (maker: string) => {
  const db = connectDB();
  let models: Promise<Array<object>>;
  models = (await db).all(
    "SELECT model,count(*) as count FROM Car WHERE make=? GROUP BY model",
    maker
  );
  return models;
};
