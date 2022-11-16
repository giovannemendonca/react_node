import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dev:326691@aulasdigitalcollege.yvtblox.mongodb.net/svl")

const db = mongoose.connection;


export default db;

