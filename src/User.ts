import { Repo } from './Repo';

/**
 * User class.
 * This is like a schema, representing the data about a single user.
 */
export class User {
  /**
   * Login identifier of this user.
   */
  public login: string;

  /**
   * Full name of this user.
   */
  public fullName: string;

  /**
   * Repos created or forked by this user.
   */
  public repoCount: number;

  /**
   * Follower count of this user.
   */
  public followerCount: number;

  /**
   * Repos of this user.
   * Note that this property is optional, and will be assigned later.
   */
  public repos?: Repo[];

  /**
   * Constructor with parameter.
   * @param userData user data to create the user
   */
  public constructor(userData: {
    login: string;
    name: string;
    public_repos: number;
    followers: number;
  }) {
    this.login = userData.login;
    this.fullName = userData.name;
    this.repoCount = userData.public_repos;
    this.followerCount = userData.followers;
  }
}
