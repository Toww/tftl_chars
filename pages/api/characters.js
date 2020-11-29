import { connectToDatabase } from "utils/monogodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  try {
    const movies = await db.collection("characters").find({}).toArray();
    res.statusCode = 200;
    res.json(movies);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
