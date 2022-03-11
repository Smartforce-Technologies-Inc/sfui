import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  ChipFieldValueType,
  SFChipsListField,
  SFChipsListFieldProps
} from './SFChipsListField';

const ChipListOptions = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  "Schindler's List",
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King',
  'The Good, the Bad and the Ugly',
  'Fight Club',
  'The Lord of the Rings: The Fellowship of the Ring',
  'Star Wars: Episode V - The Empire Strikes Back',
  'Forrest Gump',
  'Inception',
  'The Lord of the Rings: The Two Towers',
  "One Flew Over the Cuckoo's Nest",
  'Goodfellas',
  'The Matrix',
  'Seven Samurai',
  'Star Wars: Episode IV - A New Hope',
  'City of God',
  'Se7en',
  'The Silence of the Lambs',
  "It's a Wonderful Life",
  'Life Is Beautiful',
  'The Usual Suspects',
  'Léon: The Professional',
  'Spirited Away',
  'Saving Private Ryan',
  'Once Upon a Time in the West',
  'American History X',
  'Interstellar',
  'Casablanca',
  'City Lights',
  'Psycho',
  'The Green Mile',
  'The Intouchables',
  'Modern Times',
  'Raiders of the Lost Ark',
  'Rear Window',
  'The Pianist',
  'The Departed',
  'Terminator 2: Judgment Day',
  'Back to the Future',
  'Whiplash',
  'Gladiator',
  'Memento',
  'The Prestige',
  'The Lion King',
  'Apocalypse Now',
  'Alien',
  'Sunset Boulevard',
  'The Great Dictator',
  'Cinema Paradiso',
  'The Lives of Others',
  'Grave of the Fireflies',
  'Paths of Glory',
  'Django Unchained',
  'The Shining',
  'WALL·E',
  'American Beauty',
  'The Dark Knight Rises',
  'Princess Mononoke',
  'Aliens',
  'Oldboy',
  'Once Upon a Time in America',
  'Witness for the Prosecution',
  'Das Boot',
  'Citizen Kane',
  'North by Northwest',
  'Vertigo',
  'Star Wars: Episode VI - Return of the Jedi',
  'Reservoir Dogs',
  'Braveheart',
  'M',
  'Requiem for a Dream',
  'Amélie',
  'A Clockwork Orange',
  'Like Stars on Earth',
  'Taxi Driver',
  'Lawrence of Arabia',
  'Double Indemnity',
  'Eternal Sunshine of the Spotless Mind',
  'Amadeus',
  'To Kill a Mockingbird',
  'Toy Story 3',
  'Toy Story',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  "Singin' in the Rain",
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots',
  'Monty Python and the Holy Grail'
];

export default {
  title: 'Components/SFChipListField',
  component: SFChipsListField,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    delimiters: {
      description: 'The delimiter used to separate the values provided.',
      control: false
    },
    disabled: {
      description: 'If true, the chip should be displayed in a disabled state.'
    },
    emptyMessage: {
      description: 'Message displayed when the input is empty.'
    },
    freeSolo: {
      description:
        'If true, the component is free solo, meaning that the user input is not bound to provided options.'
    },
    helperText: {
      description: 'Text to help understand input values.'
    },
    inputMinWidth: {
      description: 'Minimum width for the inner input field.'
    },
    inputType: {
      description: 'The type of the inner input component field.'
    },
    isEditable: {
      description: 'If true, the content of the chip is able to be edited.'
    },
    itemChipDisplay: {
      description: 'How the loaded chip items should be displayed.'
    },
    itemChipSize: {
      description: 'The size of the loaded chip items.'
    },
    items: {
      description: 'List of chip items loaded.',
      control: false
    },
    label: {
      description: 'The content of the label.'
    },
    options: {
      description: 'List of options.',
      control: false
    },
    isValid: {
      table: { disable: true }
    },
    required: {
      table: { disable: true }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFChipsListFieldProps> = (args) => {
  const [items, setItems] = React.useState<ChipFieldValueType[]>(args.items);

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px 15px',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <SFChipsListField
        {...args}
        items={items}
        onChange={(newItems: ChipFieldValueType[]): void => setItems(newItems)}
      />
    </div>
  );
};

export const Empty = Template.bind({});

export const WithValidation = Template.bind({});

export const WithOptions = Template.bind({});

export const WithItems = Template.bind({});

export const WithOptionsAndItems = Template.bind({});

WithValidation.args = {
  isValid: (value: string): boolean => value.length > 5,
  helperText: 'Value lenght should be > 5 chars'
};

WithOptions.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  options: ChipListOptions
};

WithItems.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  items: [
    { value: 'This War of Mine' },
    { value: 'Back to the Future' },
    { value: 'Toy Story', isNew: true, hasChanged: true },
    { value: 'Pulp Fiction' },
    { value: 'WALL·E', isNew: true },
    { value: 'The Godfather', isNew: true }
  ]
};

WithOptionsAndItems.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  items: [
    { value: 'This War of Mine' },
    { value: 'Back to the Future' },
    { value: 'Toy Story', isNew: true, hasChanged: true },
    { value: 'Pulp Fiction' },
    { value: 'WALL·E', isNew: true },
    { value: 'The Godfather', isNew: true }
  ],
  options: ChipListOptions
};
