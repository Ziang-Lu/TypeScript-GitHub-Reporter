/**
 * Repo class.
 * This is like a schema, representing the data of a single repo.
 */
export class Repo {
  /**
   * Name of this repo.
   */
  public name: string;

  /**
   * Description of this repo.
   */
  public description: string;

  /**
   * URL of this repo.
   */
  public url: string;

  /**
   * Number of forks of this repo.
   */
  public forkCount: number;

  /**
   * Constructor with parameter.
   * @param repoData repo data to create the repo
   */
  public constructor(repoData: {
    name: string;
    description: string;
    html_url: string;
    forks: number;
  }) {
    this.name = repoData.name;
    this.description = repoData.description;
    this.url = repoData.html_url;
    this.forkCount = repoData.forks;
  }
}
