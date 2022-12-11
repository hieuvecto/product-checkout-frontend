import { Story, Meta } from '@storybook/react';
import React from 'react';
import Home, { HomeProps } from 'src/components/templates/Home';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta;

const Template: Story<HomeProps> = (args) => <Home {...args} />;

const baseItems = [
  {
    title: 'Small Pizza',
    description: "10'' pizza for one person",
    price: '1199',
    thumbnailUrl:
      'https://media.istockphoto.com/id/639963606/photo/mini-salami-pizza-on-a-dark-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=iNFtKW_nd8Se7fmMIxZ4Gm1U11B3hRCUK64Us8ZN6jg=',
  },
  {
    title: 'Medium Pizza',
    description: "12'' pizza for one person",
    price: '1599',
    thumbnailUrl:
      'https://c8.alamy.com/comp/2AE8FM0/pizza-isolate-medium-size-side-view-stock-photo-of-pizza-2AE8FM0.jpg',
  },
  {
    title: 'Large Pizza',
    description: "15'' pizza for one person",
    price: '2199',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkd5t4acI9FTHU8D1Xj4dtT6a1Ab3NuF2Z-hC1j0R&s',
  },
];

export const Default = Template.bind({});
Default.args = {
  checkoutItems: [
    {
      quantity: 3,
      item: { ...baseItems[0] },
    },
    {
      quantity: 2,
      item: { ...baseItems[1] },
    },
    {
      quantity: 4,
      item: { ...baseItems[2] },
    },
  ],
  subtotal: '26200',
  items: [...baseItems],
};
