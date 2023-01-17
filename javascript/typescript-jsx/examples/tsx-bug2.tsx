export default function RuleMetadataInput({
  data,
  sharedData,
  ruleSet,
  ruleSetId,
  ...props
}) {
  
  return (
    <Box w="full" {...props}>
      <Box w="full">
        <Collapse in={isOpen} animateOpacity>
        </Collapse>
      </Box>
    </Box>
  );
}

