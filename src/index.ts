import { GitHubApiService } from './GitHubApiService';
import { User } from './User';
import { Repo } from './Repo';

// Get the username from command-line
if (process.argv.length < 3) {
  console.log('Please pass in the GitHub username');
} else {
  (async () => {
    const username: string = process.argv[2];
    const service: GitHubApiService = new GitHubApiService();

    // First request
    const userData: any = await service.getUserInfo(username);
    if (userData) {
      const user = new User(userData);
      console.log(user);

      // Second request
      const reposData: any[] = await service.getUserRepos(username);
      if (reposData) {
        const repos: Repo[] = reposData.map(repoData => new Repo(repoData));
        // Sort the repos by forkCount in descending order, and we only take the
        // top 5 repos
        repos.sort((repo1, repo2) => repo2.forkCount - repo1.forkCount);
        const topRepos: Repo[] = repos.slice(0, 5);
        console.log(topRepos);
        user.repos = topRepos;
      }
    }
  })();
}
