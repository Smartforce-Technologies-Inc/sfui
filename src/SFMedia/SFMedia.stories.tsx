import React from 'react';
import { styled } from '@mui/material';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFBlueMainLight, SFBlueMainDark } from '../SFColors/SFColors';
import { SFMedia } from './SFMedia';

export default {
  title: 'Theme/SFMedia'
} as ComponentMeta<typeof React.Component>;

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 30
}));

const Media = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
}));

const Value = styled('div')(({ theme }) => ({ textAlign: 'right' }));

const Code = styled('div')(({ theme }) => ({
  padding: '4px 12px',
  borderLeft: `1px solid ${
    theme.palette.mode === 'light' ? SFBlueMainLight : SFBlueMainDark
  }`,
  fontSize: '14px'
}));

export const BreakpointsEnum: ComponentStory<typeof React.Component> = () => {
  return (
    <div>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of SFMedia Enum values for media queries breakpoint. Can be
        imported from the library.
      </p>

      <Code>
        <code>{`@import { SFMedia } from 'sfui';`}</code>
        <br />
        <code>const extra_small_width = SFMedia.XS_WIDTH</code>
      </Code>
      <Container>
        <div>
          <h3>Extra Small</h3>
          <Media>
            <span>XS_WIDTH</span>
            <Value>{SFMedia.XS_WIDTH}</Value>
            <span>XS_HEIGHT</span>
            <Value>{SFMedia.XS_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Small</h3>
          <Media>
            <span>SM_WIDTH</span>
            <Value>{SFMedia.SM_WIDTH}</Value>
            <span>SM_HEIGHT</span>
            <Value>{SFMedia.SM_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Medium</h3>
          <Media>
            <span>MD_WIDTH</span>
            <Value>{SFMedia.MD_WIDTH}</Value>
            <span>MD_HEIGHT</span>
            <Value>{SFMedia.MD_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Large</h3>
          <Media>
            <span>LG_WIDTH</span>
            <Value>{SFMedia.LG_WIDTH}</Value>
            <span>LG_HEIGHT</span>
            <Value>{SFMedia.LG_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Extra Large</h3>
          <Media>
            <span>XL_WIDTH</span>
            <Value>{SFMedia.XL_WIDTH}</Value>
            <span>XL_HEIGHT</span>
            <Value>{SFMedia.XL_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <Media>
            <span>XXL_WIDTH</span>
            <Value>{SFMedia.XXL_WIDTH}</Value>
            <span>XXL_HEIGHT</span>
            <Value>{SFMedia.XXL_HEIGHT}</Value>
          </Media>
        </div>
      </Container>
    </div>
  );
};

export const SassVariables: ComponentStory<typeof React.Component> = () => {
  return (
    <div>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of Sass Variables values for media queries breakpoint. Can be
        imported from the library into a sass module.
      </p>

      <Code>
        <code>@import '~sfui/dist/styles/SFMedia/SFMedia.module.scss';</code>
        <br />
        <code>{'@media screen and (min-width: $sf-media-xs-width) {  }'}</code>
      </Code>

      <Container>
        <div>
          <h3>Extra Small</h3>
          <Media>
            <span>$sf-media-xs-width</span>
            <Value>{SFMedia.XS_WIDTH}</Value>
            <span>$sf-media-xs-height</span>
            <Value>{SFMedia.XS_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Small</h3>
          <Media>
            <span>$sf-media-sm-width</span>
            <Value>{SFMedia.SM_WIDTH}</Value>
            <span>$sf-media-sm-height</span>
            <Value>{SFMedia.SM_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Medium</h3>
          <Media>
            <span>$sf-media-md-width</span>
            <Value>{SFMedia.MD_WIDTH}</Value>
            <span>$sf-media-md-height</span>
            <Value>{SFMedia.MD_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Large</h3>
          <Media>
            <span>$sf-media-lg-width</span>
            <Value>{SFMedia.LG_WIDTH}</Value>
            <span>$sf-media-lg-height</span>
            <Value>{SFMedia.LG_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Extra Large</h3>
          <Media>
            <span>$sf-media-xl-width</span>
            <Value>{SFMedia.XL_WIDTH}</Value>
            <span>$sf-media-xl-height</span>
            <Value>{SFMedia.XL_HEIGHT}</Value>
          </Media>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <Media>
            <span>$sf-media-xxl-width</span>
            <Value>{SFMedia.XXL_WIDTH}</Value>
            <span>$sf-media-xxl-height</span>
            <Value>{SFMedia.XXL_HEIGHT}</Value>
          </Media>
        </div>
      </Container>
    </div>
  );
};
