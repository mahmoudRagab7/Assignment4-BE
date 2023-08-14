const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";

const dbname = "assignment4";

mongoClient.connect(connectionUrl, (error, res1) => {
  if (error) {
    return console.log("error has occured");
  }
  console.log("All Perf");

  const db = res1.db(dbname);

  //////////////////////////////////////////////////////////////
  //   insertOne 2

  db.collection("users").insertOne(
    {
      name: "mahmoud",
      age: 22,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert Data");
      }
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertOne(
    {
      name: "ragab",
      age: 92,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert Data");
      }
      console.log(data.insertedId);
    }
  );

  //////////////////////////////////////////////////////////////
  //   insertMany 10 5 of 10 => age 25

  db.collection("users").insertMany(
    [
      {
        name: "mahmoud",
        age: 22,
      },
      {
        name: "adel",
        age: 25,
      },
      {
        name: "reem",
        age: 25,
      },
      {
        name: "tasneem",
        age: 25,
      },
      {
        name: "aya",
        age: 25,
      },
      {
        name: "mai",
        age: 23,
      },
      {
        name: "mayar",
        age: 23,
      },
      {
        name: "samah",
        age: 21,
      },
      {
        name: "salma",
        age: 29,
      },
      {
        name: "nada",
        age: 25,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("Unable to insert data");
      }
      console.log(data.insertedCount);
    }
  );

  /////////////////////////////////////////////////////////////////////
  //   find match 25

  db.collection("users")
    .find({ age: 25 })
    .toArray((error, users) => {
      if (error) {
        return console.log("error has occured");
      }
      console.log(users);
    });

  ///////////////////////////////////////////////////////////////////
  //   limit 3 25y

  db.collection("users")
    .find({ age: 25 })
    .limit(3)
    .toArray((error, users) => {
      if (error) {
        return console.log("error has occured");
      }
      console.log(users);
    });

  //////////////////////////////////////////////////////////////////////
  //   $set name 4

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1db") },
      {
        $set: { name: "Osama" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1e4") },
      {
        $set: { name: "samoha" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1df") },
      {
        $set: { name: "sara" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1de") },
      {
        $set: { name: "yara" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  ///////////////////////////////////////////////////////////////////////
  //   updateOne for 1 inc 20

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1db") },
      {
        $inc: { age: 20 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  ///////////////////////////////////////////////////////////////////////
  //   updateMany inc age 10

  db.collection("users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => console.log(error));

  ///////////////////////////////////////////////////////////////////
  //   deleteOne 1

  db.collection("users")
    .deleteOne({ _id: mongodb.ObjectId("64da54e2fdfa8a23e896e1db") })
    .then((data1) => {
      console.log(data1.deletedCount);
    })
    .catch((error) => console.log(error));

  ///////////////////////////////////////////////////////////////////
  //   deleteMany age 35

  db.collection("users")
    .deleteMany({ age: 35 })
    .then((data1) => {
      console.log(data1.deletedCount);
    })
    .catch((error) => console.log(error));
});
