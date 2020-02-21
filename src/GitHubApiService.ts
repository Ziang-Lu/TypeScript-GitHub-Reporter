import fetch from 'node-fetch';
import { Repo } from './Repo';

export class GitHubApiService {
  /**
   * Returns user info based on the given username.
   * @param {string} username given username
   * @returns {Promise} a promise to return the user info
   */
  public async getUserInfo(username: string): Promise<any> {
    let userData: any = {};
    try {
      const response: any = await fetch(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            'User-Agent': 'request'
          }
        }
      );
      userData = await response.json();
    } catch (err) {
      console.error(err);
    }
    return userData;
  }

  /**
   * Returns user repos based on the given username.
   * @param {string} username given username
   * @returns {Promise} a promise to return the user repos
   */
  public async getUserRepos(username: string): Promise<any[]> {
    let reposData: any[] = [];
    try {
      const response: any = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            'User-Agent': 'request'
          }
        }
      );
      reposData = await response.json();
    } catch (err) {
      console.error(err);
    }
    return reposData;
  }
}
