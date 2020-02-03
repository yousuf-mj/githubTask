import axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config();

const getUser = (username: string) => {
    const url = `${process.env.GITHUB_API}/users/${username}`;
    return axios.get(url);
}

const getRepos = (username: string) => {
    const url = `${process.env.GITHUB_API}/users/${username}/repos`;
    return axios.get(url);
}


export {getUser, getRepos}