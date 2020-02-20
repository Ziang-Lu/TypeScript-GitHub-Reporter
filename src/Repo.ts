export class Repo {
  public name: string;

  public description: string;

  public url: string;

  public forkCount: number;

  public constructor(
    name: string,
    description: string,
    url: string,
    forkCount: number
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.forkCount = forkCount;
  }
}
