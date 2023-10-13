const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const emailRoutes = require("./routes/emailRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Increase payload size limit
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 60000,
});

async function run() {
  try {
    await client.connect();
    const postCollection = client.db("aq-career").collection("post");
    const usersCollection = client.db("aq-career").collection("users");
    // login for authentication
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2h",
      });
      res.send({ token });
    });
    // verify jwt
    const verifyJWT = (req, res, next) => {
      try {
        const authorization = req.headers.authorization;
        if (!authorization) {
          return res
            .status(401)
            .send({ error: true, message: "unauthorized access" });
        }
        const token = authorization.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
          if (err) {
            return res
              .status(401)
              .send({ error: true, message: "invalid token" });
          }
          req.decoded = decoded;
          next();
        });
      } catch (error) {
        res.status(500).send(error);
      }
    };

    // admin login vefification
    app.get("/admin/:email", verifyJWT, async (req, res) => {
      try {
        const email = req.params?.email;
        if (req.decoded.email !== email) {
          res.send({
            admin: false,
            error: true,
            message: "unauthorized access",
          });
        }
        const query = { email: email };
        const user = await usersCollection.findOne(query);
        const result = { admin: user?.role === "admin" };
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    const verifyAdmin = async (req, res, next) => {
      try {
        const email = req?.decoded?.email;
        const query = { email: email };
        const user = await usersCollection.findOne(query);
        if (user?.role !== "admin") {
          return res
            .status(403)
            .send({ error: true, message: "forbidden access" });
        }
        next();
      } catch (error) {
        res.status(500).send(error);
      }
    };

    app.use("/email", emailRoutes);

    app.get("/all", async (req, res) => {
      try {
        const result = await postCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.get("/single/:id", async (req, res) => {
      try {
        const id = req.params?.id;
        if (!ObjectId.isValid(id)) {
          return res
            .status(400)
            .send({ error: true, message: "Invalid ObjectId format" });
        }
        const filterID = { _id: new ObjectId(id) };
        const result = await postCollection.findOne(filterID);
        if (!result) {
          return res.status(404).send({ error: true, message: "Not found" });
        }
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.post("/post", verifyJWT, verifyAdmin, async (req, res) => {
      try {
        const data = req.body;
        const result = await postCollection.insertOne(data);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.put("/post/:id", verifyJWT, verifyAdmin, async (req, res) => {
      try {
        const data = req.body;
        const id = req.params?.id;
        const filter = { _id: new ObjectId(id) };
        const update = {
          $set: {
            ...data,
          },
        };
        const options = { upsert: false };
        const result = await postCollection.updateOne(filter, update, options);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.delete("/post/:id", verifyJWT, verifyAdmin, async (req, res) => {
      try {
        const id = req.params?.id;
        const filter = { _id: new ObjectId(id) };
        const result = await postCollection.deleteOne(filter);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(error);
  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("simple AQ Careers CRUD");
});

app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
