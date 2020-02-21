# GitHub Reporter Mini-Project

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

To run the project, simply do

```shell
$ npm start
```

