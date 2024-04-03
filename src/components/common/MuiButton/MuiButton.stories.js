import React from 'react';
import Button from '@mui/material/Button';

export default {
  title: 'MUI/Button',
  component: Button,
  argTypes: {
    colorScheme: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    label: { control: 'text' }
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'error',
  children: 'Danger',
};
