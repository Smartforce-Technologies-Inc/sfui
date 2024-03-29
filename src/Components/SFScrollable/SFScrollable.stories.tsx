import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFScrollable, SFScrollableProps } from './SFScrollable';

export default {
  title: 'Components/SFScrollable',
  component: SFScrollable,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    onScroll: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

// TODO same inconvenient as SFPaper, argtypes not functioning

const Template: Story<SFScrollableProps> = () => {
  return (
    <div>
      <div style={{ height: 200 }}>
        <SFScrollable>
          <div style={{ width: '120%' }}>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h2>Where does it come from?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).{' '}
            </p>
          </div>
        </SFScrollable>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  controls: {
    disable: true
  }
};

export const ScrollToTop: Story = () => {
  return (
    <div>
      <p>
        It's possible to call a scrollToTop method using a ref. First, you need
        to create and pass a <code>ref</code> as a prop
      </p>

      <code>
        const ref = React.createRef();
        <br />
        {`<SFScrollable ref={ref}>
          {content}
        </SFScrollable>
      `}
      </code>

      <p>
        Then, you can call the scrollToTop method like this:
        <br />
        <br />
        <code>ref.current.scrollToTop();</code>
      </p>
    </div>
  );
};
ScrollToTop.parameters = {
  controls: {
    disable: true
  }
};
