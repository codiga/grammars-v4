compile:
	rm -rf gen
	mkdir gen
	cp *.g4 gen/
	cp Java/TypeScriptParserBase.java gen/
	cp Java/TypeScriptLexerBase.java gen/
	cd gen && java -Xmx500M -cp "$$ANTLR_JAR:." org.antlr.v4.Tool TypeScriptLexer.g4 TypeScriptParser.g4 && javac *.java

check: compile
	for file in examples/*.tsx; do ./scripts/check-file.sh $$file ; done
	for file in examples/*.ts; do ./scripts/check-file.sh $$file ; done
