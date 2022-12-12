import React, { FunctionComponent, Fragment } from 'react';
import css from 'styled-jsx/css';
import CustomerSelectBox, {
  CustomerSelectBoxProps,
} from '../organisms/CustomerSelectBox';
import ProductList, { ProductListProps } from '../organisms/ProductList';
import ShoppingCartForm, {
  ShoppingCartFormProps,
} from '../organisms/ShoppingCartForm';

const styles = css`
  /* stylelint-disable */
`;

export type HomeProps = ProductListProps &
  ShoppingCartFormProps &
  CustomerSelectBoxProps;

const Home: FunctionComponent<HomeProps> = ({
  items,
  checkoutItems,
  customers,
  selectedCustomerName,
  subtotal,
  onSubmit,
}) => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="rounded-lg col-span-2">
            <ProductList items={items} />
          </div>
          <div className="rounded-lg col-span-1">
            <CustomerSelectBox
              customers={customers}
              selectedCustomerName={selectedCustomerName}
            />
            <ShoppingCartForm
              checkoutItems={checkoutItems}
              subtotal={subtotal}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    </Fragment>
  );
};

export default Home;
