import express from 'express';
import { getUser, getRepos, favouriteLanguage } from '../github/index'
const router = express.Router();

router.post('/user', async(req, res) => {
    const username = req.body.username;

    try {
        const response = await getUser(username);
        res
            .status(200)
            .json({ 
                success: true,
                data: response.data
            })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                error: error
            })
    }
});

router.post('/repos', async(req, res) => {
    const username = req.body.username;

    try {
        const response = await getRepos(username);
        res
            .status(200)
            .json({ 
                success: true,
                data: response.data
            })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                error: error
            })
    }
});

router.post('/language', async(req, res) => {
    const username = req.body.username;

    try {
        const response = await favouriteLanguage(username);
        res
            .status(200)
            .json({ 
                success: true,
                data: response
            })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                error: error
            })
    }
});

module.exports = router;