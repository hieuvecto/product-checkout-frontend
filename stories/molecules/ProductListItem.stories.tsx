import { Story, Meta } from '@storybook/react';
import React from 'react';
import ProductListItem, {
  ProductListItemProps,
} from 'src/components/molecules/ProductListItem';

export default {
  title: 'Molecules/ProductListItem',
  component: ProductListItem,
} as Meta;

const Template: Story<ProductListItemProps> = (args) => (
  <ProductListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: {
    title: 'Small Pizza',
    description: "10'' pizza for one person",
    price: '1199',
    thumbnailUrl:
      'https://media.istockphoto.com/id/639963606/photo/mini-salami-pizza-on-a-dark-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=iNFtKW_nd8Se7fmMIxZ4Gm1U11B3hRCUK64Us8ZN6jg=',
  },
};
