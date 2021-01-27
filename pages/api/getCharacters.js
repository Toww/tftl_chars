import { connectToDatabase } from "utils/monogodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  
  try {
    const character = await db.collection("characters").find({}).toArray();
    res.statusCode = 200;
    res.json(character);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
