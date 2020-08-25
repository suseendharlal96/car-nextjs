import { NextApiRequest, NextApiResponse } from "next";

import { getModels } from "../../database/getModels";
import { getParamAsStrings } from "../../../getParamAsString";

export default async function getCarModels(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const manufacturer = getParamAsStrings(req.query.manufacturer);
  const models = await getModels(manufacturer);
  res.json(models);
}
