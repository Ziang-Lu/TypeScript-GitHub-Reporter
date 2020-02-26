# GitHub Reporter Mini-Project

This mini-project accepts a GitHub username as a command-line argument, internally makes call to GitHub API, and displays the user information as well as that user's repos.

<br>

The source code is under `src/`, and the output JavaScript files will be compiled to `out/`

So we define a new `script` in `package.json` for quick run:

```json
{
  // ...
  "scripts": {
    "start": "rm -rf out/* && tsc && node out/index",
    // ...
  }
  // ...
}
```

To run the project, simply use the command-line, and pass in the GitHub username:

```shell
$ npm start <your GitHub username>
```

