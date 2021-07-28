import { connectDatabase, insertDocument, getAllDocuments, } from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId; // access the property by using query

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body; // object destructuring

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // const db = client.db();

    // const result = await db.collection("comments").insertOne(newComment);

    // console.log(result);
    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }
  }

  client.close();
}

export default handler;
