const getFeatureN1FeatureFlags = <N1FeatureFlags>(
  config: {
    featureFlags: {
      n1: N1FeatureFlags
    }
  },
  override: (flags: N1FeatureFlags) => N1FeatureFlags,
) => {
  return override(config.featureFlags.n1)
}

const featureFlags = {
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

const flags = getFeatureN1FeatureFlags(featureFlags, (flags) => flags)
flags //?
