import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dev:******@aulasdigitalcollege.yvtblox.mongodb.net/svl")

const db = mongoose.connection;


export default db;
