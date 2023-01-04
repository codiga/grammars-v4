## Codiga


## JavaScript with JSX

See `javascript/jsx`


## TypeScript with JSX

See `javascript/typescript-jsx`


## Installing hook

The hook make sure any change of the grammar does not
introduce any regression.


```bash
./install-hooks.sh
```


## Testing

Invoke


```bash
make check
```

In one of the grammar support by Codiga
 - `javascript/jsx`
 - `javascript/typescript-jsx`


## Updating ANTLR version

 - Make sure you update the `ANTLR_JAR` environment variable
 - Update ANTLR installation in the CI/CD job in `.github/workflows/test.yml`


## Adding tests

 - JavaScript: see [javascript/jsx](javascript/jsx) 
 - TypeScript: see [javascript/typescript-jsx](javascript/typescript-jsx)