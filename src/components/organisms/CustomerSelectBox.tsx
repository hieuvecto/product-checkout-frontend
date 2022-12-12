import React, {
  FunctionComponent,
  Fragment,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCustomerName } from 'src/ducks/checkouts/checkouts.operations';
import { useOutsideAlerter } from 'src/libs/useOutsideAlerter';
import { Customer } from 'src/types';
import css from 'styled-jsx/css';
import Image from '../atoms/Image';
import CustomerSelectItem from '../molecules/CustomerSelectItem';

const styles = css`
  /* stylelint-disable */
`;

export type CustomerSelectBoxProps = {
  customers: Pick<
    Customer,
    'id' | 'name' | 'displayName' | 'iconImageUrl' | 'type'
  >[];
  selectedCustomerName: string;
};

const CustomerSelectBox: FunctionComponent<CustomerSelectBoxProps> = ({
  customers,
  selectedCustomerName,
}) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedname, setSelectedName] = useState(selectedCustomerName);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedCustomerName(dispatch, selectedname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedname]);

  const selectedCustomer = customers.find(
    (customer) => customer.name === selectedname,
  );

  // Handle open select box
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle click customer
  const handleCustomerClick = (
    customer: Pick<
      Customer,
      'id' | 'name' | 'displayName' | 'iconImageUrl' | 'type'
    >,
  ) => {
    setSelectedName(customer.name);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div ref={wrapperRef}>
        <label
          id="listbox-label"
          className="block text-sm font-medium text-gray-700"
        >
          Choose Customer
        </label>
        <div className="relative mt-1">
          <button
            onClick={handleClick}
            type="button"
            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            {selectedCustomer && (
              <span className="flex items-center">
                <Image
                  src={selectedCustomer?.iconImageUrl ?? ''}
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">
                  {selectedCustomer.displayName}
                </span>
              </span>
            )}
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              {/* Heroicon name: mini/chevron-up-down */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/*
            Select popover, show/hide based on select state.

            Entering: ""
              From: ""
              To: ""
            Leaving: "transition ease-in duration-100"
              From: "opacity-100"
              To: "opacity-0"
          */}
          {isOpen && (
            <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {customers.map((customer) => (
                <CustomerSelectItem
                  key={customer.name}
                  customer={customer}
                  isSelected={customer.name === selectedCustomer?.name}
                  onClick={() => handleCustomerClick(customer)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default CustomerSelectBox;
