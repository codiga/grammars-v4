compile:
	rm -rf gen
	mkdir gen
	cp *.g4 gen/
	cp Java/JavaScriptParserBase.java gen/
	cp Java/JavaScriptLexerBase.java gen/
	cd gen && java -Xmx500M -cp "${$ANTLR_JAR}:." org.antlr.v4.Tool JavaScriptLexer.g4 JavaScriptParser.g4 && javac *.java

check: compile
	for file in `ls examples/*.{js,jsx}`; do ./scripts/check-file.sh $$file ; done
