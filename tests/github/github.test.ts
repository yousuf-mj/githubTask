import { getUser, getRepos, favouriteLanguage } from '../../src/github/index';
import axios, { AxiosResponse } from 'axios'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Github API', () => {
    let username: string;

    beforeEach(() => {
        username = 'yousufmj'
    });

    it('should return basic information about a user', async () => {
        const mockResponse = require('../fixtures/github/userResponse.json');
        mockedAxios.get.mockResolvedValue(mockResponse);

        const user: AxiosResponse = await getUser(username);

        expect(user.status).toEqual(200);
        expect(user.data.login).toEqual(username);
    });

    it('should return all repos belonging to a user', async () => {
        const mockResponse = require('../fixtures/github/repoResponse.json');
        mockedAxios.get.mockResolvedValue(mockResponse);

        const repos: AxiosResponse = await getRepos(username);

        expect(repos.status).toEqual(200);
        expect(repos.data[0]).toEqual(
            expect.objectContaining({
                owner: expect.objectContaining({ login: username })
            }
            )
        );
    });

    it('should return favourite language of a user', async () => {
        const mockResponse = require('../fixtures/github/repoResponse.json');
        const expectLanguage = 'JavaScript';

        mockedAxios.get.mockResolvedValue(mockResponse);

        const language = await favouriteLanguage(username);

        expect(language).toEqual(expectLanguage);

    });
});