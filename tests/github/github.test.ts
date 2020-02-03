import {getUser} from '../../src/github/index'

describe('Github API', () => {
    
    it('should get basic information about a github user', async() => {
        
        const user = await getUser('yousuf-mj');
        console.log(user);
        
        
        expect(user.status).toEqual(200);
    });
});