import mongoose from "mongoose";

export const dbConnection = () => {
  const url= 'mongodb+srv://adi123:singh123@cluster0.tp2vw7k.mongodb.net/'
  mongoose
    .connect(url, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
