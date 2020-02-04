import axios from 'axios';
import * as dotenv from "dotenv";
import { RepoResponse } from '../types/github';

dotenv.config();

const getUser = async (username: string) => {
    const url: string = `${process.env.GITHUB_API}/users/${username}`;
    try {
        return await axios.get(url);
    } catch (error) {
        throw new error('Error with request');
    }
}

const getRepos = async (username: string) => {
    const url: string = `${process.env.GITHUB_API}/users/${username}/repos`;
    return await axios.get(url);
}

const favouriteLanguage = async (username: string) => {
    const repos = await getRepos(username);

    const languages = repos.data
        .filter((repo: RepoResponse) => repo.language !== null)
        .map((repo: RepoResponse) => repo.language);

    const favourite = languages.sort((a: string,b: string) =>
        languages.filter((v: string) => v===a).length
        - languages.filter((v: string) => v===b).length
    ).pop();

    return favourite;
}


export {getUser, getRepos, favouriteLanguage}