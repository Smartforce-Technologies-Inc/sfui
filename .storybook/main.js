module.exports = {
  // TODO set this value when migration its done
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // TODO remove (used to test migrated components on storybook)
  stories: [
    '../src/Components/SFAlert/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFAlertCollapse/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFBadge/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFButton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFCard/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFCheckbox/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFDialog/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFDrawer/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFIcon/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFIconButton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFLink/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFMenu/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFNumericField/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFPaper/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFRadioGroup/SFRadio/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFRadioGroup/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSearch/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSkeleton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSpinner/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSplitButton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSwitch/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFText/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTextField/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTextShadow/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTimeline/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTooltip/*.stories.@(js|jsx|ts|tsx)',
    '../src/SFColors/*.stories.@(js|jsx|ts|tsx)',
    '../src/SFMedia/*.stories.@(js|jsx|ts|tsx)',
    '../src/SFHttpStatusCode/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
