import { connectToDatabase } from "utils/mongodb";

// Function to get all characters from the database.
// The logic is exported so that it can be used in pages using
// getStaticProps / getServerSideProps
export const getAllCharactersFromDb = async () => {
  const { db } = await connectToDatabase();
  const characters = await db.collection("characters").find({}).toArray();
  // JSON.parse + JSON.stringify are used to avoid known errors with mongodb
  // and is specified in official information on how to use it with NextJs.
  return JSON.parse(JSON.stringify(characters));
};

// Function to add a new character to db
const addChartoDb = async (charObject) => {
  const { db } = await connectToDatabase();
  const result = await db.collection("characters").insertOne(charObject);
  return result;
};

export default async (req, res) => {
  // getting method from request and executing corresponding behavior
  const { method } = req;

  switch (method) {
    case "GET":
      // Get all characters from database
      const characters = await getAllCharactersFromDb();
      // Return it in response
      res.status(200).json(characters);
      break;

    case "POST":
      // Add new character to db
      const insertCall = await addChartoDb(req.body);
      // send confirmation message in response
      // if the insert was successfull, its deletedCount will be 1 if not it will be 0;
      const success = insertCall.insertedCount;
      // As 1 is truthy and 0 falsy we can use it to check if the operation was successfull
      if (success) {
        res.status(200).send("Character successfully added");
      } else {
        res.status(404).send("Unable to add character");
      }
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
