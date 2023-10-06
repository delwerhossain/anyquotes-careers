const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/emailRoutes");
//cors extra --------------

// ------------

//jwt
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  ClientSession,
} = require("mongodb");
const app = express();
// Increase the payload size limit to handle large files (e.g., 10MB)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "4mb" }));
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

////////////////////////////////////////
// mongoDB  everything starts
////////////////////////////////////////

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    const postCollection = client.db("aq-career").collection("post");

    ////////////////////////////////////////
    // mongoDB  API CRUD starts here
    ////////////////////////////////////////

    //Signup and login
    app.use("/email", emailRoutes);

    // get the all data
    app.get("/post", async (req, res) => {
      const result = await postCollection.find().toArray();
      res.send(result);
    });
    // get the single data
    app.get("/post/:id", async (req, res) => {
      const id = req.params.id; 
      const filterID = { _id: new ObjectId(id) };
      const result = await postCollection.findOne(filterID);
      res.send(result);
    });

    //post post data
    app.post("/post", async (req, res) => {
      const data = req.body;
      const result = await postCollection.insertOne(data);
      res.status(200).json(result);
      
    });

    //edit post data
    app.put("/post/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      // const publishTime = Date.now();
      const {
        jobTitle,
        location,
        lastEditUser,
        editTime,
        hours,
        ctc,
        experience,
        description,
        responsibilities,
        requirements,
      } = data;

      const filter = { _id: new ObjectId(id) };
      const update = {
        $set: {
          jobTitle,
          location,
          lastEditUser,
          editTime,
          hours,
          ctc,
          experience,
          // publishTime,
          description,
          responsibilities,
          requirements,
        },
      };
      const options = { upsert: false };

      const result = await postCollection.updateOne(filter, update, options);

      res.status(200).json(result);
    });
    // delete post data
    app.delete("/post/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await postCollection.deleteOne(filter);
      res.status(200).json(result);
    })

    ////////////////////////////////////////
    // mongoDB  everything ends here
    ////////////////////////////////////////

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

////////////////////////////////////////
// mongoDB  everything ends here
////////////////////////////////////////

//Signup and login
app.use("/email", emailRoutes);

// test and home routes
app.get("/", (req, res) => {
  res.send("simple AQ Careers CRUD");
});
app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
