import express from "express";
import axios from "axios";
const router = express.Router();

interface LanguageResponse {
    language: string;
    username: string;
}

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
    });
});

router.post("/", (req, res) => {
    const username = req.body.username;
    const url = `${process.env.SITE_URL}/api/language`;
    const language = axios.post(url, { username });

    language
        .then((r) => {
            const data: LanguageResponse = r.data.data;

            res.render("index", {
                language: data.language,
                username: data.username,
            });
        })
        .catch((error) => {
            console.log(error);

            res.render("index", { error });
        });
});

module.exports = router;
