import React, { FunctionComponent, Fragment } from 'react';
import { Item } from 'src/types';
import css from 'styled-jsx/css';
import Title from '../atoms/Title';
import ProductListItem from '../molecules/ProductListItem';

const styles = css`
  /* stylelint-disable */
`;

export type ProductListProps = {
  items: Pick<Item, 'title' | 'description' | 'price' | 'thumbnailUrl'>[];
};

const ProductList: FunctionComponent<ProductListProps> = ({ items }) => {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Title
            type="h2"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Choose your pizza size
          </Title>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items.map((item, index) => (
              <ProductListItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ProductList;
