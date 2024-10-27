import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import connectToMongoDB from "./db/conectToMongo.js";
import { config } from "dotenv";

const app = express();
config(); 

app.use(cors({
  origin: 'https://test-task-blue.vercel.app', 
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: false,
}));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/product", commentRoutes); 
app.use("/api/product", productRoutes);


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
