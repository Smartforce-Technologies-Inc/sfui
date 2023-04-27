import React from 'react';
import { styled } from '@mui/material';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFBlueMainLight, SFBlueMainDark } from '../SFColors/SFColors';
import { SFMedia } from './SFMedia';

export default {
  title: 'Theme/SFMedia'
} as ComponentMeta<typeof React.Component>;

const StyledDiv = styled('div')(({ theme }) => ({
  '& .container': { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 },
  '& .media': { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  '& .value': { textAlign: 'right' },
  '& .code': {
    padding: '4px 12px',
    borderLeft: `1px solid ${
      theme.palette.mode === 'light' ? SFBlueMainLight : SFBlueMainDark
    }`,
    fontSize: '14px'
  }
}));

export const BreakpointsEnum: ComponentStory<typeof React.Component> = () => {
  return (
    <StyledDiv>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of SFMedia Enum values for media queries breakpoint. Can be
        imported from the library.
      </p>

      <div className='code'>
        <code>{`@import { SFMedia } from 'sfui';`}</code>
        <br />
        <code>const extra_small_width = SFMedia.XS_WIDTH</code>
      </div>
      <div className='container'>
        <div>
          <h3>Extra Small</h3>
          <div className='media'>
            <span>XS_WIDTH</span>
            <span className='value'>{SFMedia.XS_WIDTH}</span>
            <span>XS_HEIGHT</span>
            <span className='value'>{SFMedia.XS_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Small</h3>
          <div className='media'>
            <span>SM_WIDTH</span>
            <span className='value'>{SFMedia.SM_WIDTH}</span>
            <span>SM_HEIGHT</span>
            <span className='value'>{SFMedia.SM_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Medium</h3>
          <div className='media'>
            <span>MD_WIDTH</span>
            <span className='value'>{SFMedia.MD_WIDTH}</span>
            <span>MD_HEIGHT</span>
            <span className='value'>{SFMedia.MD_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Large</h3>
          <div className='media'>
            <span>LG_WIDTH</span>
            <span className='value'>{SFMedia.LG_WIDTH}</span>
            <span>LG_HEIGHT</span>
            <span className='value'>{SFMedia.LG_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Large</h3>
          <div className='media'>
            <span>XL_WIDTH</span>
            <span className='value'>{SFMedia.XL_WIDTH}</span>
            <span>XL_HEIGHT</span>
            <span className='value'>{SFMedia.XL_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <div className='media'>
            <span>XXL_WIDTH</span>
            <span className='value'>{SFMedia.XXL_WIDTH}</span>
            <span>XXL_HEIGHT</span>
            <span className='value'>{SFMedia.XXL_HEIGHT}</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export const SassVariables: ComponentStory<typeof React.Component> = () => {
  return (
    <StyledDiv>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of Sass Variables values for media queries breakpoint. Can be
        imported from the library into a sass module.
      </p>

      <div className='code'>
        <code>@import '~sfui/dist/styles/SFMedia/SFMedia.module.scss';</code>
        <br />
        <code>{'@media screen and (min-width: $sf-media-xs-width) {  }'}</code>
      </div>

      <div className='container'>
        <div>
          <h3>Extra Small</h3>
          <div className='media'>
            <span>$sf-media-xs-width</span>
            <span className='value'>{SFMedia.XS_WIDTH}</span>
            <span>$sf-media-xs-height</span>
            <span className='value'>{SFMedia.XS_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Small</h3>
          <div className='media'>
            <span>$sf-media-sm-width</span>
            <span className='value'>{SFMedia.SM_WIDTH}</span>
            <span>$sf-media-sm-height</span>
            <span className='value'>{SFMedia.SM_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Medium</h3>
          <div className='media'>
            <span>$sf-media-md-width</span>
            <span className='value'>{SFMedia.MD_WIDTH}</span>
            <span>$sf-media-md-height</span>
            <span className='value'>{SFMedia.MD_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Large</h3>
          <div className='media'>
            <span>$sf-media-lg-width</span>
            <span className='value'>{SFMedia.LG_WIDTH}</span>
            <span>$sf-media-lg-height</span>
            <span className='value'>{SFMedia.LG_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Large</h3>
          <div className='media'>
            <span>$sf-media-xl-width</span>
            <span className='value'>{SFMedia.XL_WIDTH}</span>
            <span>$sf-media-xl-height</span>
            <span className='value'>{SFMedia.XL_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <div className='media'>
            <span>$sf-media-xxl-width</span>
            <span className='value'>{SFMedia.XXL_WIDTH}</span>
            <span>$sf-media-xxl-height</span>
            <span className='value'>{SFMedia.XXL_HEIGHT}</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};
