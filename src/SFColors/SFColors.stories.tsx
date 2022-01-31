import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Theme } from '@material-ui/core/styles';
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
import { makeStyles } from '@material-ui/core';

export default {
  title: 'Theme/SFColor'
} as Meta;

interface MainColor {
  name: string;
  shade?: string;
  bgColor: string;
  textColor: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px 80px',
    marginBottom: '25px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '15px 80px auto',
    gap: '15px',
    alignItems: 'center'
  },
  color: { width: '20px', height: '20px' },
  text: { margin: '0' },
  code: {
    padding: '4px 12px',
    borderLeft: `1px solid ${
      theme.palette.type === 'light' ? SFBlueMainLight : SFBlueMainDark
    }`,
    fontSize: '14px'
  }
}));

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
  const styles = useStyles();

  return (
    <div>
      <h2>SFColors Typescript Constants</h2>
      <p>
        List of SFColor typescript constants. Can be imported from the library.
      </p>

      <div className={styles.code}>
        <code>@import {'{SFColor, Another Color}'} from 'sfui';</code>
        <br />
        <code>{'<div style={{color: SFColor}}></div>'}</code>
      </div>
      <div className={styles.container}>
        <div>
          <h3>Light Main Colors</h3>
          <div className={styles.content}>
            {lightMainColors.map((item, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: item.bgColor }}
                />
                <p className={styles.text}>{`${item.bgColor}`}</p>
                <p className={styles.text}>{`${item.name}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Dark Main Colors</h3>
          <div className={styles.content}>
            {darkMainColors.map((item, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: item.bgColor }}
                />
                <p className={styles.text}>{`${item.bgColor}`}</p>
                <p className={styles.text}>{`${item.name}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h3>SFBlue</h3>
          <div className={styles.content}>
            {Object.keys(SFBlue).map((value, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: SFBlue[value] }}
                />
                <p className={styles.text}>{`${SFBlue[value]}`}</p>
                <p className={styles.text}>SFBlue[{value}]</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFRed</h3>
          <div className={styles.content}>
            {Object.keys(SFRed).map((value, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: SFRed[value] }}
                />
                <p className={styles.text}>{`${SFRed[value]}`}</p>
                <p className={styles.text}>SFRed[{value}]</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFGrey</h3>
          <div className={styles.content}>
            {Object.keys(SFGrey).map((value, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: SFGrey[value] }}
                />
                <p className={styles.text}>{`${SFGrey[value]}`}</p>
                <p className={styles.text}>SFGrey[{value}]</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFGreen</h3>
          <div className={styles.content}>
            {Object.keys(SFGreen).map((value, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: SFGreen[value] }}
                />
                <p className={styles.text}>{`${SFGreen[value]}`}</p>
                <p className={styles.text}>SFGreen[{value}]</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  const styles = useStyles();
  const LightMainColors = palette.get('LMColors');
  const NightMainColors = palette.get('NMColors');
  const SFBluePalette = palette.get('SFBlue');
  const SFRedPalette = palette.get('SFRed');
  const SFGreyPalette = palette.get('SFGrey');
  const SFGreenPalette = palette.get('SFGreen');

  return (
    <div>
      <h2>SFColors Sass Variables</h2>
      <p>List of SFColor Sass variables. Can be imported from the library.</p>
      <div className={styles.code}>
        <code>@import '~sf-ui-fabric/dist/styles/SFPalette.scss'; </code>
      </div>
      <div className={styles.container}>
        <div>
          <h3>Light Main Colors</h3>
          <div className={styles.content}>
            {LightMainColors.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Dark Main Colors</h3>
          <div className={styles.content}>
            {NightMainColors.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h3>SFBlue</h3>
          <div className={styles.content}>
            {SFBluePalette.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFRed</h3>
          <div className={styles.content}>
            {SFRedPalette.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFGrey</h3>
          <div className={styles.content}>
            {SFGreyPalette.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>SFGreen</h3>
          <div className={styles.content}>
            {SFGreenPalette.map((color, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: color.hex }}
                />
                <p className={styles.text}>{`${color.hex.toUpperCase()}`}</p>
                <p className={styles.text}>{`${color.name}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SassVariables = SassTemplate.bind({});
SassVariables.parameters = {
  controls: {
    disable: true
  }
};
