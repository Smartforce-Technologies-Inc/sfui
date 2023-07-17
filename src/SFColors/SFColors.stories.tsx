import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  SFBlue,
  SFBlueMainLight,
  SFBlueMainDark,
  SFRed,
  SFRedMainLight,
  SFRedMainDark,
  SFGrey,
  SFGreyMainLight,
  SFGreyMainDark,
  SFGreen,
  SFGreenMainLight,
  SFGreenMainDark,
  SFBackgroundLight,
  SFBackgroundDark,
  SFSurfaceLight,
  SFSurfaceDark,
  SFTextWhite,
  SFTextBlack
} from './SFColors';
import { styled } from '@mui/material';

export default {
  title: 'Theme/SFColor'
} as Meta;

interface MainColor {
  name: string;
  shade?: string;
  bgColor: string;
  textColor: string;
}

const Code = styled('div')(({ theme }) => ({
  padding: '4px 12px',
  borderLeft: `1px solid ${
    theme.palette.mode === 'light' ? SFBlueMainLight : SFBlueMainDark
  }`,
  fontSize: '14px'
}));

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '25px 80px',
  marginBottom: '25px'
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
});

const Item = styled('div')({
  display: 'grid',
  gridTemplateColumns: '15px 80px auto',
  gap: '15px',
  alignItems: 'center'
});

const Color = styled('div')({
  width: '20px',
  height: '20px'
});

const Text = styled('p')({
  margin: '0'
});

const lightMainColors: MainColor[] = [
  {
    name: 'SFBlueMainLight',
    shade: '500',
    bgColor: SFBlueMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'SFRedMainLight',
    shade: '700',
    bgColor: SFRedMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'SFGreyMainLight',
    shade: '600',
    bgColor: SFGreyMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'SFGreenMainLight',
    shade: '500',
    bgColor: SFGreenMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'SFBackgroundLight',
    bgColor: SFBackgroundLight,
    textColor: SFTextBlack
  },
  { name: 'SFSurfaceLight', bgColor: SFSurfaceLight, textColor: SFTextBlack }
];

const darkMainColors: MainColor[] = [
  {
    name: 'SFBlueMainDark',
    shade: '200',
    bgColor: SFBlueMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'SFRedMainDark',
    shade: '200',
    bgColor: SFRedMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'SFGreyMainDark',
    shade: '900',
    bgColor: SFGreyMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'SFGreenMainDark',
    shade: '200',
    bgColor: SFGreenMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'SFBackgroundDark',
    bgColor: SFBackgroundDark,
    textColor: SFTextWhite
  },
  { name: 'SFSurfaceDark', bgColor: SFSurfaceDark, textColor: SFTextWhite }
];

const Template: Story = () => (
  <div>
    <h2>Palette</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px'
      }}
    >
      {/* Left column */}
      <div>
        <h3>Light Main Colors</h3>
        <div>
          {lightMainColors.map((item, i) => (
            <div
              key={`${item.name}${i}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: item.textColor,
                background: item.bgColor,
                padding: '30px 10px',
                height: '20px'
              }}
            >
              <span>{item.name}</span>
              <span>
                {`${item.shade ? item.shade + ' | ' : ''}${item.bgColor}`}
              </span>
            </div>
          ))}
        </div>
        <br />
        <h3>Dark Main Colors</h3>
        <div>
          {darkMainColors.map((item, i) => (
            <div
              key={`${item.name}${i}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: item.textColor,
                background: item.bgColor,
                padding: '30px 10px',
                height: '20px'
              }}
            >
              <span>{item.name}</span>
              <span>
                {`${item.shade ? item.shade + ' | ' : ''}${item.bgColor}`}
              </span>
            </div>
          ))}
        </div>
        <br />
        <h3>Neutral Colors</h3>
        <div>
          {Object.keys(SFGrey)
            .reverse()
            .map((value, index) => (
              <div
                key={`${value}${index}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color:
                    index < 9 && value !== 'A100' && value !== 'A200'
                      ? SFTextWhite
                      : SFTextBlack,
                  background: SFGrey[value],
                  padding: '10px 10px',
                  height: '20px'
                }}
              >
                <span>{value}</span>
                <span>{SFGrey[value]}</span>
              </div>
            ))}
        </div>
      </div>
      {/* Right column */}
      <div>
        <div>
          <h3>Blue Colors</h3>
          {Object.keys(SFBlue)
            .reverse()
            .map((value, index) => (
              <div
                key={`${value}${index}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: index < 5 ? SFTextWhite : SFTextBlack,
                  background: SFBlue[value],
                  padding: '10px 10px',
                  height: '20px'
                }}
              >
                <span>{value}</span>
                <span>{SFBlue[value]}</span>
              </div>
            ))}
        </div>
        <br />
        <div>
          <h3>Error Colors</h3>
          <div>
            {Object.keys(SFRed)
              .reverse()
              .map((value, index) => (
                <div
                  key={`${value}${index}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: index < 5 ? SFTextWhite : SFTextBlack,
                    background: SFRed[value],
                    padding: '10px 10px',
                    height: '20px'
                  }}
                >
                  <span>{value}</span>
                  <span>{SFRed[value]}</span>
                </div>
              ))}
          </div>
        </div>
        <br />
        <div>
          <h3>Green Colors</h3>
          <div>
            {Object.keys(SFGreen)
              .reverse()
              .map((value, index) => (
                <div
                  key={`${value}${index}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color:
                      index < 8 && value !== 'A100' && value !== 'A200'
                        ? SFTextWhite
                        : SFTextBlack,
                    background: SFGreen[value],
                    padding: '10px 10px',
                    height: '20px'
                  }}
                >
                  <span>{value}</span>
                  <span>{SFGreen[value]}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Palette = Template.bind({});
Palette.parameters = {
  controls: {
    disable: true
  }
};

const ColorsConstTemplate: Story = () => {
  return (
    <div>
      <h2>SFColors Typescript Constants</h2>
      <p>
        List of SFColor typescript constants. Can be imported from the library.
      </p>

      <Code>
        <code>@import {'{SFColor, Another Color}'} from 'sfui';</code>
        <br />
        <code>{'<div style={{color: SFColor}}></div>'}</code>
      </Code>

      <Container>
        <div>
          <h3>Light Main Colors</h3>
          <Content>
            {lightMainColors.map((item, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: item.bgColor }} />
                <Text>{`${item.bgColor}`}</Text>
                <Text>{`${item.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>

        <div>
          <h3>Dark Main Colors</h3>
          <Content>
            {darkMainColors.map((item, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: item.bgColor }} />
                <Text>{`${item.bgColor}`}</Text>
                <Text>{`${item.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
      </Container>

      <Container>
        <div>
          <h3>SFBlue</h3>
          <Content>
            {Object.keys(SFBlue).map((value, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: SFBlue[value] }} />
                <Text>{`${SFBlue[value]}`}</Text>
                <Text>SFBlue[{value}]</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFRed</h3>
          <Content>
            {Object.keys(SFRed).map((value, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: SFRed[value] }} />
                <Text>{`${SFRed[value]}`}</Text>
                <Text>SFRed[{value}]</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFGrey</h3>
          <Content>
            {Object.keys(SFGrey).map((value, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: SFGrey[value] }} />
                <Text>{`${SFGrey[value]}`}</Text>
                <Text>SFGrey[{value}]</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFGreen</h3>
          <Content>
            {Object.keys(SFGreen).map((value, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: SFGreen[value] }} />
                <Text>{`${SFGreen[value]}`}</Text>
                <Text>SFGreen[{value}]</Text>
              </Item>
            ))}
          </Content>
        </div>
      </Container>
    </div>
  );
};

export const ColorsConst = ColorsConstTemplate.bind({});
ColorsConst.parameters = {
  controls: {
    disable: true
  }
};

interface Color {
  name: string;
  hex: string;
}

const palette: Map<string, Color[]> = new Map<string, Color[]>();
palette.set('SFBlue', [
  { name: '$sf-blue-50', hex: '#e5f6ff' },
  { name: '$sf-blue-100', hex: ' #ccebff' },
  { name: '$sf-blue-200', hex: ' #80c6ff' },
  { name: '$sf-blue-300', hex: ' #5cadff' },
  { name: '$sf-blue-400', hex: ' #338fff' },
  { name: '$sf-blue-500', hex: ' #0066ff' },
  { name: '$sf-blue-600', hex: ' #0050e6' },
  { name: '$sf-blue-700', hex: ' #003dcc' },
  { name: '$sf-blue-800', hex: ' #002699' },
  { name: '$sf-blue-900', hex: ' #001466' }
]);

palette.set('SFRed', [
  { name: '$sf-red-50', hex: ' #fceeef' },
  { name: '$sf-red-100', hex: ' #f9dcde' },
  { name: '$sf-red-200', hex: ' #f0a8ad' },
  { name: '$sf-red-300', hex: ' #eb8e95' },
  { name: '$sf-red-400', hex: ' #e7747c' },
  { name: '$sf-red-500', hex: ' #db343e' },
  { name: '$sf-red-600', hex: ' #c7232e' },
  { name: '$sf-red-700', hex: ' #ad1f29' },
  { name: '$sf-red-800', hex: ' #821724' },
  { name: '$sf-red-900', hex: ' #5f111e' }
]);

palette.set('SFGrey', [
  { name: '$sf-grey-50', hex: ' #F2F2F2' },
  { name: '$sf-grey-100', hex: ' #e5e5e5' },
  { name: '$sf-grey-200', hex: ' #cccccc' },
  { name: '$sf-grey-300', hex: ' #b2b2b2' },
  { name: '$sf-grey-400', hex: ' #999999' },
  { name: '$sf-grey-500', hex: ' #808080' },
  { name: '$sf-grey-600', hex: ' #666666' },
  { name: '$sf-grey-700', hex: ' #4d4d4d' },
  { name: '$sf-grey-800', hex: ' #333333' },
  { name: '$sf-grey-900', hex: ' #1a1a1a' },
  { name: '$sf-grey-a100', hex: ' #cccccc' },
  { name: '$sf-grey-a200', hex: ' #b2b2b2' },
  { name: '$sf-grey-a400', hex: ' #333333' },
  { name: '$sf-grey-a700', hex: ' #666666' }
]);

palette.set('SFGreen', [
  { name: '$sf-green-50', hex: ' #E0F5E7' },
  { name: '$sf-green-100', hex: ' #C1EBCF' },
  { name: '$sf-green-200', hex: ' #54C97B' },
  { name: '$sf-green-300', hex: ' #33B760' },
  { name: '$sf-green-400', hex: ' #239F4C' },
  { name: '$sf-green-500', hex: ' #17823B' },
  { name: '$sf-green-600', hex: ' #0F6C2E' },
  { name: '$sf-green-700', hex: ' #085421' },
  { name: '$sf-green-800', hex: ' #043A16' },
  { name: '$sf-green-900', hex: ' #01230C' }
]);

palette.set('LMColors', [
  { name: '$sf-blue-main-light', hex: ' #0066ff' },
  { name: '$sf-red-main-light', hex: ' #ad1f29' },
  { name: '$sf-grey-main-light', hex: ' #666666' },
  { name: '$sf-green-main-light', hex: ' #17823B' },
  { name: '$sf-background-light', hex: ' #fafafa' },
  { name: '$sf-surface-light', hex: ' #ffffff' }
]);

palette.set('NMColors', [
  { name: '$sf-blue-main-dark', hex: ' #80c6ff' },
  { name: '$sf-red-main-dark', hex: ' #f0a8ad' },
  { name: '$sf-grey-main-dark', hex: ' #999999' },
  { name: '$sf-green-main-dark', hex: ' #54C97B' },
  { name: '$sf-background-dark', hex: ' #121212' },
  { name: '$sf-surface-dark', hex: ' #1f1f1f' }
]);

const SassTemplate: Story = () => {
  const LightMainColors = palette.get('LMColors') as Color[];
  const NightMainColors = palette.get('NMColors') as Color[];
  const SFBluePalette = palette.get('SFBlue') as Color[];
  const SFRedPalette = palette.get('SFRed') as Color[];
  const SFGreyPalette = palette.get('SFGrey') as Color[];
  const SFGreenPalette = palette.get('SFGreen') as Color[];

  return (
    <div>
      <h2>SFColors Sass Variables</h2>
      <p>List of SFColor Sass variables. Can be imported from the library.</p>
      <Code>
        <code>@import '~sf-ui-fabric/dist/styles/SFPalette.scss'; </code>
      </Code>

      <Container>
        <div>
          <h3>Light Main Colors</h3>
          <Content>
            {LightMainColors.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>Dark Main Colors</h3>
          <Content>
            {NightMainColors.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
      </Container>

      <Container>
        <div>
          <h3>SFBlue</h3>
          <Content>
            {SFBluePalette.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFRed</h3>
          <Content>
            {SFRedPalette.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFGrey</h3>
          <Content>
            {SFGreyPalette.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <h3>SFGreen</h3>
          <Content>
            {SFGreenPalette.map((color, index) => (
              <Item key={index}>
                <Color style={{ backgroundColor: color.hex }} />
                <Text>{`${color.hex.toUpperCase()}`}</Text>
                <Text>{`${color.name}`}</Text>
              </Item>
            ))}
          </Content>
        </div>
      </Container>
    </div>
  );
};

export const SassVariables = SassTemplate.bind({});
SassVariables.parameters = {
  controls: {
    disable: true
  }
};
