## Create a reference file

```bash
./scripts/create-ref.sh examples/jsxtest.jsx
```

## Check everything is working

```bash
make check
```


## Configuration


```bash
export ANTLR_JAR=/path/to/antlr-complete-X.Y.jar
export CLASSPATH=$ANTLR_JAR:.
```