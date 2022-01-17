const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://root:root@cluster0.nw0gx.mongodb.net/mythology-greek-api?retryWrites=true&w=majority";
const mythologySchema = require("../../api/mythology/mythology.model.js");

const mythologies = [
    {
        name: "Zeus",
        birth: "33",
        parents: "2",
        siblings: "2",
        abode: "2",
        symbol: "2",
        description: "9",
        img: "https://res.cloudinary.com/dsukxxlrb/image/upload/v1642448875/mythology/zeus_wk2orf.jpg",
    },
    {
        name: "s",
        birth: "2",
        parents: "2",
        siblings: "2",
        abode: "2",
        symbol: "2",
        description: "2",
        img: "3",
    }
  
  ];

const mythologyDocuments = mythologies.map((mythology) => new mythologySchema(mythology));

console.log(mongoDB);

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allMythology = await mythologySchema.find();

    if (allMythology.length) {

      await mythologySchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings mythology: ${err}`))
  
.then(async () => {

    await mythologySchema.insertMany(mythologyDocuments);

    console.log("mythology seed created");

}).catch((err) => console.log(`Error makings mythology seed: ${err}`))
  
.finally(() => mongoose.disconnect());