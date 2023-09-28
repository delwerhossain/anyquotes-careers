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

    // get the employees data
    app.get("/data", async (req, res) => {
      const result = await postCollection.find().toArray();
      res.send(result);
    });

    //post employee data
    app.post("/post", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await postCollection.insertOne(data);
      res.send(result);
    });

    //edit employee data
    app.put("/edit/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const {
        jobTitle,
        location,
        hours,
        ctc,
        experience,
        publishTime,
        description,
        responsibilities,
        requirements,
      } = data;

      const filter = { _id: new ObjectId(id) };
      const update = {
        $set: {
          jobTitle,
          location,
          hours,
          ctc,
          experience,
          publishTime,
          description,
          responsibilities,
          requirements,
        },
      };
      const options = { upsert: false };

      const result = await classCollection.updateOne(filter, update, options);

      res.send(result);
    });

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
