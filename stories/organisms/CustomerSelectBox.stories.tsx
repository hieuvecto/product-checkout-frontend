import { Story, Meta } from '@storybook/react';
import React from 'react';
import CustomerSelectBox, {
  CustomerSelectBoxProps,
} from 'src/components/organisms/CustomerSelectBox';
import { CustomerType } from 'src/types';

export default {
  title: 'Organisms/CustomerSelectBox',
  component: CustomerSelectBox,
} as Meta;

const Template: Story<CustomerSelectBoxProps> = (args) => (
  <CustomerSelectBox {...args} />
);

const baseCustomers = [
  {
    id: 1,
    name: 'default',
    displayName: 'Default',
    iconImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4&usqp=CAU',
    type: CustomerType.default,
  },
  {
    id: 2,
    name: 'microsoft',
    displayName: 'Microsoft',
    iconImageUrl: 'https://avatars.githubusercontent.com/u/6154722?s=280&v=4',
    type: CustomerType.privileged,
  },
  {
    id: 3,
    name: 'amazon',
    displayName: 'Amazon',
    iconImageUrl: 'https://znews-stc.zdn.vn/static/topic/company/amazon.png',
    type: CustomerType.privileged,
  },
];

export const Default = Template.bind({});
Default.args = {
  customers: [...baseCustomers],
  selectedCustomerName: 'default',
};
