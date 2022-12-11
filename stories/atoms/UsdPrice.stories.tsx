import { Story, Meta } from '@storybook/react';
import React from 'react';
import UsdPrice, { UsdPriceProps } from 'src/components/atoms/UsdPrice';

export default {
  title: 'Atoms/UsdPrice',
  component: UsdPrice,
} as Meta;

const Template: Story<UsdPriceProps> = (args) => <UsdPrice {...args} />;

export const Default = Template.bind({});
Default.args = {
  price: '1199',
};
