import express from "express";
const app = express();

app.get('/health', async (req, res) => {

    res.status(200).json({
        message: "Chal raha hai",
    });
});
export default app;