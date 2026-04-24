import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});