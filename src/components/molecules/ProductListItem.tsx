import React, { FunctionComponent, Fragment, MouseEventHandler } from 'react';
import { Item } from 'src/types';
import css from 'styled-jsx/css';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import UsdPrice from '../atoms/UsdPrice';

const styles = css`
  /* stylelint-disable */
`;

export type ProductListItemProps = {
  item: Pick<Item, 'title' | 'description' | 'price' | 'thumbnailUrl'>;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ProductListItem: FunctionComponent<ProductListItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <Fragment>
      <div onClick={onClick}>
        <div className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <Image
              src={item.thumbnailUrl}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <Title type="h3" className="text-sm text-gray-700">
                {item.title}
              </Title>
              <Text className="mt-1 text-sm text-gray-500">
                {item.description}
              </Text>
            </div>
            <Text className="text-sm font-medium text-gray-900">
              <UsdPrice price={item.price} />
            </Text>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ProductListItem;
