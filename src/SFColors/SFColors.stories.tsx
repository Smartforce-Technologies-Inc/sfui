import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
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
  SFBackgroundLight,
  SFBackgroundDark,
  SFSurfaceLight,
  SFSurfaceDark,
  SFTextWhite,
  SFTextBlack
} from './SFColors';

export default {
  title: 'Theme/SFColor'
} as Meta;

interface MainColor {
  name: string;
  shade?: string;
  bgColor: string;
  textColor: string;
}

const lightMainColors: MainColor[] = [
  {
    name: 'Primary Main',
    shade: '500',
    bgColor: SFBlueMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'Error Main',
    shade: '700',
    bgColor: SFRedMainLight,
    textColor: SFTextWhite
  },
  {
    name: 'Neutral Main',
    shade: '600',
    bgColor: SFGreyMainLight,
    textColor: SFTextWhite
  },
  { name: 'Background', bgColor: SFBackgroundLight, textColor: SFTextBlack },
  { name: 'Surface', bgColor: SFSurfaceLight, textColor: SFTextBlack }
];

const darkMainColors: MainColor[] = [
  {
    name: 'Primary Main',
    shade: '200',
    bgColor: SFBlueMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'Error Main',
    shade: '200',
    bgColor: SFRedMainDark,
    textColor: SFTextBlack
  },
  {
    name: 'Neutral Main',
    shade: '900',
    bgColor: SFGreyMainDark,
    textColor: SFTextBlack
  },
  { name: 'Background', bgColor: SFBackgroundDark, textColor: SFTextWhite },
  { name: 'Surface', bgColor: SFSurfaceDark, textColor: SFTextWhite }
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
      </div>
    </div>
  </div>
);

export const Palette = Template.bind({});
