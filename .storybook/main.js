module.exports = {
  // TODO replace with this when migration finished
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: [
    // '../src/SFColors/*.stories.@(js|jsx|ts|tsx)'
    // '../src/SFHttpStatusCode/*.stories.@(js|jsx|ts|tsx)'
    // '../src/SFMedia/*.stories.@(js|jsx|ts|tsx)'
    '../src/Components/SFPaper/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFLink/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/SFSwitch/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
