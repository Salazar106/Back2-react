const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://react-mt2022:123@mintic.w5a100r.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("               📅 DB funcionando 📅"))
    .catch((error) => console.log(error));
};
module.exports= db