import {getUser} from '../../src/github/index';
import axios, {AxiosResponse} from 'axios'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Github API', () => {
    let username: string;

    beforeEach(() => {
        username = 'yousuf-mj'
    });
    
    it('should get basic information about a github user', async() => {
        const mockResponse = require('../fixtures/github/userResponse.json');
        mockedAxios.get.mockResolvedValue(mockResponse);
        
        const user = await getUser(username);

        expect(user.status).toEqual(200);
        expect(user.data.login).toEqual(username);
    });
});