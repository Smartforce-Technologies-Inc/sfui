module.exports = {
  // TODO set this value when migration its done
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // TODO remove (used to test migrated components on storybook)
  stories: [
    '../src/Components/SFAlert/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFBadge/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFCard/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFDialog/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFDrawer/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFIcon/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFIconButton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFLink/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFPaper/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSwitch/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFText/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTimeline/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFTooltip/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
