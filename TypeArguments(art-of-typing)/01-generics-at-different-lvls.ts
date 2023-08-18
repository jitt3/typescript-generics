//update the below function to infer and return the type of the flags
const getFeatureN1FeatureFlagsExample = <N1FeatureFlags>(
  config: unknown,
  override: (flags: unknown) => unknown,
) => {
  return override(config.featureFlags.n1)
}

const featureFlagsExample = {
  hello: {
    world: true,
  },
  featureFlags: {
    n1: {
      showMediaCalls: false,
      showCalendar: true,
      showAttachments: true,
    },
  },
}

const flagsExample = getFeatureN1FeatureFlagsExample(
  featureFlags,
  (flags) => flags,
)
