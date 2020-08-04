import axios from "axios";
import * as dotenv from "dotenv";
import { RepoResponse } from "../types/github";
import mongoose from "mongoose";
import { UserModel } from "../db/userSchema";

dotenv.config();

const createUser = (username: string) => {
    console.log("create");
    try {
        new UserModel({
            username,
            dateSearched: Date.now(),
        }).save();
    } catch (e) {
        console.error(e);
    }
};

const getUser = async (username: string) => {
    const url: string = `${process.env.GITHUB_API}/users/${username}`;

    try {
        console.log(`finding user ${username}`);
        const userData = await axios.get(url);
        return userData;
    } catch (error) {
        console.error(error);
        throw new error("Error with request");
    }
};

const getRepos = async (username: string) => {
    const url: string = `${process.env.GITHUB_API}/users/${username}/repos`;
    try {
        console.log(`finding repo for ${username}`);
        return await axios.get(url);
    } catch (error) {
        throw new error("Error with request");
    }
};

const favouriteLanguage = async (username: string) => {
    try {
        const repos = await getRepos(username);
        console.log(`finding language for ${username}`);

        const languages = repos.data
            .filter((repo: RepoResponse) => repo.language !== null)
            .map((repo: RepoResponse) => repo.language);

        const favourite = languages
            .sort(
                (a: string, b: string) =>
                    languages.filter((v: string) => v === a).length -
                    languages.filter((v: string) => v === b).length
            )
            .pop();

        return {
            username,
            language: favourite,
        };
    } catch (error) {
        throw new error("Error with request");
    }
};

export { getUser, getRepos, favouriteLanguage };
