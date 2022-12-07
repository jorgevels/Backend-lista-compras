import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import initialState from "./initialState";

const app = express();
const port = process.env.PORT || 3006;

//Milddeware
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE, PATCH"
}
app.use(cors(corsOptions))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript v4.17");
});

app.get("/api/v1", (req: Request, res: Response) => {
  res.json(initialState);
});

app.listen(port, () => {
  console.log(`App Listinging on port: ${port}`);
});
