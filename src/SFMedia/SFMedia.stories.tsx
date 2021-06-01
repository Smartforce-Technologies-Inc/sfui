import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Story, Meta } from '@storybook/react/types-6-0';
import SFMedia from './SFMedia';

export default {
  title: 'Theme/SFMedia'
} as Meta;

const useStyles = makeStyles({
  container: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 },
  media: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  value: { textAlign: 'right' }
});

export const Breakpoints: Story = () => {
  const classes = useStyles();

  return (
    <div>
      <h2>Media Queries Breakpoints</h2>

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
