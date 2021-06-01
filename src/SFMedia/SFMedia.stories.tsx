import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Story, Meta } from '@storybook/react/types-6-0';
import { SFMedia } from './SFMedia';

export default {
  title: 'Theme/SFMedia'
} as Meta;

const useStyles = makeStyles({
  container: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 },
  media: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  value: { textAlign: 'right' }
});

export const BreakpointsEnum: Story = () => {
  const classes = useStyles();

  return (
    <div>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of SFMedia Enum values for media queries breakpoint. Can be
        imported from the library.
      </p>

      <code>import SFMedia from 'sfui';</code>
      <br />
      <code>const extra_small_width = SFMedia.XS_WIDTH</code>

      <div className={classes.container}>
        <div>
          <h3>Extra Small</h3>
          <div className={classes.media}>
            <span>XS_WIDTH</span>
            <span className={classes.value}>{SFMedia.XS_WIDTH}</span>
            <span>XS_HEIGHT</span>
            <span className={classes.value}>{SFMedia.XS_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Small</h3>
          <div className={classes.media}>
            <span>SM_WIDTH</span>
            <span className={classes.value}>{SFMedia.SM_WIDTH}</span>
            <span>SM_HEIGHT</span>
            <span className={classes.value}>{SFMedia.SM_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Medium</h3>
          <div className={classes.media}>
            <span>MD_WIDTH</span>
            <span className={classes.value}>{SFMedia.MD_WIDTH}</span>
            <span>MD_HEIGHT</span>
            <span className={classes.value}>{SFMedia.MD_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Large</h3>
          <div className={classes.media}>
            <span>LG_WIDTH</span>
            <span className={classes.value}>{SFMedia.LG_WIDTH}</span>
            <span>LG_HEIGHT</span>
            <span className={classes.value}>{SFMedia.LG_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Large</h3>
          <div className={classes.media}>
            <span>XL_WIDTH</span>
            <span className={classes.value}>{SFMedia.XL_WIDTH}</span>
            <span>XL_HEIGHT</span>
            <span className={classes.value}>{SFMedia.XL_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <div className={classes.media}>
            <span>XXL_WIDTH</span>
            <span className={classes.value}>{SFMedia.XXL_WIDTH}</span>
            <span>XXL_HEIGHT</span>
            <span className={classes.value}>{SFMedia.XXL_HEIGHT}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SassVariables: Story = () => {
  const classes = useStyles();

  return (
    <div>
      <h2>Media Queries Breakpoints</h2>

      <p>
        List of Sass Variables values for media queries breakpoint. Can be
        imported from the library into a sass module.
      </p>

      <code>@import '~sfui/dist/styles/SFMedia/SFMedia.module.scss';</code>
      <br />
      <br />
      <code>{'@media screen and (min-width: $sf-media-xs-width) {  }'}</code>

      <div className={classes.container}>
        <div>
          <h3>Extra Small</h3>
          <div className={classes.media}>
            <span>$sf-media-xs-width</span>
            <span className={classes.value}>{SFMedia.XS_WIDTH}</span>
            <span>$sf-media-xs-height</span>
            <span className={classes.value}>{SFMedia.XS_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Small</h3>
          <div className={classes.media}>
            <span>$sf-media-sm-width</span>
            <span className={classes.value}>{SFMedia.SM_WIDTH}</span>
            <span>$sf-media-sm-height</span>
            <span className={classes.value}>{SFMedia.SM_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Medium</h3>
          <div className={classes.media}>
            <span>$sf-media-md-width</span>
            <span className={classes.value}>{SFMedia.MD_WIDTH}</span>
            <span>$sf-media-md-height</span>
            <span className={classes.value}>{SFMedia.MD_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Large</h3>
          <div className={classes.media}>
            <span>$sf-media-lg-width</span>
            <span className={classes.value}>{SFMedia.LG_WIDTH}</span>
            <span>$sf-media-lg-height</span>
            <span className={classes.value}>{SFMedia.LG_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Large</h3>
          <div className={classes.media}>
            <span>$sf-media-xl-width</span>
            <span className={classes.value}>{SFMedia.XL_WIDTH}</span>
            <span>$sf-media-xl-height</span>
            <span className={classes.value}>{SFMedia.XL_HEIGHT}</span>
          </div>
        </div>

        <div>
          <h3>Extra Extra Large</h3>
          <div className={classes.media}>
            <span>$sf-media-xxl-width</span>
            <span className={classes.value}>{SFMedia.XXL_WIDTH}</span>
            <span>$sf-media-xxl-height</span>
            <span className={classes.value}>{SFMedia.XXL_HEIGHT}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
