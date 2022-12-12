import { Story, Meta } from '@storybook/react';
import React from 'react';
import CustomerSelectItem, {
  CustomerSelectItemProps,
} from 'src/components/molecules/CustomerSelectItem';
import ProductListItem, {
  ProductListItemProps,
} from 'src/components/molecules/ProductListItem';
import { CustomerType } from 'src/types';

export default {
  title: 'Molecules/CustomerSelectItem',
  component: CustomerSelectItem,
} as Meta;

const Template: Story<CustomerSelectItemProps> = (args) => (
  <CustomerSelectItem {...args} />
);

const baseCustomer = {
  id: 1,
  name: 'microsoft',
  displayName: 'Microsoft',
  iconImageUrl: 'https://avatars.githubusercontent.com/u/6154722?s=280&v=4',
  type: CustomerType.privileged,
};

export const Default = Template.bind({});
Default.args = {
  customer: { ...baseCustomer },
};

export const IsSelected = Template.bind({});
IsSelected.args = {
  customer: { ...baseCustomer },
  isSelected: true,
};
