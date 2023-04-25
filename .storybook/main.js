module.exports = {
  // TODO set this value when migration its done
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // TODO remove (used to test migrated components on storybook)
  stories: [
    '../src/Components/SFIcon/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFIconButton/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFLink/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFPaper/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSwitch/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFRadioGroup/SFRadio/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFRadioGroup/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
