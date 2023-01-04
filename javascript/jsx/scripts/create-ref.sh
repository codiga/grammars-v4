#!/bin/sh

FILE=$1
VERIFICATION="${FILE}.ref"

if [ ! -f "$FILE" ]; then
  echo "$FILE does not exists"
  exit 0
fi


make compile

(cd gen && java -Xmx500M -cp "$ANTLR_JAR:$CLASSPATH" org.antlr.v4.gui.TestRig JavaScript program "../$FILE" -tree > "../$VERIFICATION")

echo "Created reference file $VERIFICATION"

exit 0