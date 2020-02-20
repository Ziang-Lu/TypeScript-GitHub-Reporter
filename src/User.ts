import { Repo } from './Repo';

export class User {
  public login: string;

  public fullName: string;

  public repoCount: number;

  public followerCount: number;

  public repos: Repo[];

  public constructor(
    login: string,
    fullName: string,
    repoCount: number,
    followerCount: number
  ) {
    this.login = login;
    this.fullName = fullName;
    this.repoCount = repoCount;
    this.followerCount = followerCount;
    this.repos = [];
  }
}
