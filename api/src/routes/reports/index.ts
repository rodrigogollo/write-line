import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("reports");
})

export default app;
