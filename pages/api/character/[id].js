import { connectToDatabase } from "utils/mongodb";
import { ObjectId } from "mongodb";

// Function to get a single character from DB
export const getCharFromDb = async (charId) => {
  const { db } = await connectToDatabase();
  const char = await db
    .collection("characters")
    .findOne({ _id: ObjectId(`${charId}`) });
  return JSON.parse(JSON.stringify(char));
};

// Function to find and replace character in DB
const updateCharInDb = async (charId, replacementChar) => {
  const { db } = await connectToDatabase();
  const result = await db
    .collection("characters")
    .replaceOne({ _id: ObjectId(`${charId}`) }, replacementChar, {});
  return result;
};

// Function to delete a character in db
const deleteCharFromDb = async (charId) => {
  const { db } = await connectToDatabase();
  const result = await db
    .collection("characters")
    .deleteOne({ _id: ObjectId(`${charId}`) });
  return result;
};

export default async (req, res) => {
  // getting id and method from request (id corresponds to the slug in the URL because filename is [id])
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get character from database
      const char = await getCharFromDb(id);
      // Return it in response
      res.status(200).json(char);
      break;
    case "PUT":
      // Update character in database
      const updateCall = await updateCharInDb(id, req.body);
      // if the update was successfull, its modifiedCount will be 1, if not it will be 0;
      const updateSuccess = updateCall.modifiedCount;
      // As 1 is truthy and 0 falsy we can use it to check if the operation was successfull
      if (updateSuccess) {
        res.status(200).send(`Character ${id} updated`);
      } else {
        res.status(404).send("Unable to modify character");
      }
      break;
    case "DELETE":
      const deletionCall = await deleteCharFromDb(id);
      // if the deletion was successfull, its deletedCount will be 1, if not it will be 0;
      const deletionSuccess = deletionCall.deletedCount;
      // As 1 is truthy and 0 falsy we can use it to check if the operation was successfull
      if (deletionSuccess) {
        res.status(200).send("Character successfully deleted");
      } else {
        res.status(404).send("Unable to delete character");
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
