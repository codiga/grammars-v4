const Index = () => {
  return (
    <>
      <b>World</b>
      {true && 
        <div>
          <Box w="full" as={CodeMirror} value={decodeBase64(rule.content)} />
        </div>
      }
    </>
  );
};
