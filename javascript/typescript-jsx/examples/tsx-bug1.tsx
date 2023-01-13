<Box
	as="form"
	layerStyle="paper"
	onSubmit={methods.handleSubmit(onSubmit)}
>
	<Heading
		size="h6"
		layerStyle="sectionHeading"
		_dark={{ bg: "base.dark" }}
	>
		Metadata
	</Heading>

	<MetadataInput
		mt="space_24"
		data={data}
		sharedData={sharedData}
		ruleSet={rule?.ruleSet}
		ruleSetId={ruleSetIdParam}
	/>

	<Heading
		size="h6"
		mt="space_4"
		mb="space_24"
		layerStyle="sectionHeading"
		_dark={{ bg: "base.dark" }}
	>
		Rule and tests
	</Heading>

	<TutorialBanner />

	<CreateTestsProvider>
		<Box {...codeStyles}>
			<Flex
				w="full"
				gap="space_8"
				bg="neutral.0"
				_dark={{ bg: "neutral.100" }}
				{...(isFocusMode
					? { pos: "sticky", top: 0, zIndex: 2, pt: "space_16" }
					: {})}
			>
				<RuleTypeInput
					language={language}
					{...getRuleTypeStyles(isFocusMode, isMobile)}
				/>
				{!isMobile && (
					<TestsActions
						{...getTestsActionsStyles(isFocusMode)}
						fields={fields}
						prepend={prepend}
						onHideTests={handleHideTests}
						areTestsHidden={areTestsHidden}
					/>
				)}
			</Flex>
			<Flex
				w="full"
				gap="space_8"
				flexDir={{ base: "column", md: "row" }}
			>
				<DefinitionInput
					{...getRuleContentStyles(
						areTestsHidden,
						isFocusMode,
						isMobile,
					)}
					fields={fields}
					prepend={prepend}
					isMobile={isMobile}
					isFocusMode={isFocusMode}
					onFocusMode={handleFocusMode}
				/>

				{isMobile && (
					<TestsActions
						{...getTestsActionsStyles(isFocusMode, isMobile)}
						isMobile={isMobile}
						fields={fields}
						prepend={prepend}
						onHideTests={handleHideTests}
						areTestsHidden={areTestsHidden}
					/>
				)}

				<TestsListInput
					{...getTestsListStyles(areTestsHidden, isFocusMode, isMobile)}
					fields={fields}
					prepend={prepend}
					remove={remove}
				/>
			</Flex>
		</Box>
	</CreateTestsProvider>

	<Flex gridGap="space_8" mt="space_24">
		<Button variant="secondary" size="md" onClick={handleCancel}>
			Cancel
		</Button>
		<Button type="submit" size="md">
			Save
		</Button>
	</Flex>
</Box>
