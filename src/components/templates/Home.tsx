import React, { FunctionComponent, Fragment } from 'react';
import css from 'styled-jsx/css';
import ProductList, { ProductListProps } from '../organisms/ProductList';
import ShoppingCartForm, {
  ShoppingCartFormProps,
} from '../organisms/ShoppingCartForm';

const styles = css`
  /* stylelint-disable */
`;

export type HomeProps = ProductListProps & ShoppingCartFormProps;

const Home: FunctionComponent<HomeProps> = ({
  items,
  checkoutItems,
  subtotal,
  onSubmit,
}) => {
  return (
    <Fragment>
      <ProductList items={items} />
      <ShoppingCartForm
        checkoutItems={checkoutItems}
        subtotal={subtotal}
        onSubmit={onSubmit}
      />
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Home;
