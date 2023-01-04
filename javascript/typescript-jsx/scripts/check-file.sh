#!/bin/sh



FILE=$1
VERIFICATION="${FILE}.ref"

echo "Checking $FILE"

if [ ! -f "$FILE" ]; then
  echo "$FILE does not exists"
  exit 1
fi

if [ ! -f "$VERIFICATION" ]; then
  echo "No verification file for $FILE"
  exit 0
fi


TEMPDIR=$(mktemp)

( cd gen && java -Xmx500M -cp "$ANTLR_JAR:$CLASSPATH" org.antlr.v4.gui.TestRig TypeScript program "../$FILE" -tree > "$TEMPDIR")

cmp "$VERIFICATION" "$TEMPDIR" >/dev/null 2>/dev/null

if [ $? -ne 0 ]; then
  echo "error when verifying $FILE"
  exit 1
fi

exit 0