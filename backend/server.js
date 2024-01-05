const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const app = express();

require("./conn/conn");
app.use(express.json());
app.use(cors());

app.use("/api/v1", contactRoutes);

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
