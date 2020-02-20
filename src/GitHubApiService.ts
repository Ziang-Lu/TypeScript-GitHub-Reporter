import fetch from 'node-fetch';

export class GitHubApiService {
  public async getUserInfo(username: string): Promise<void> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'User-Agent': 'request'
        }
      });
      const userData = await response.json();
      console.log(userData);
    } catch (err) {
      console.error(err);
    }
  }

  public async getUserRepos(username: string): Promise<void> {}
}
