import React, { FunctionComponent, Fragment } from 'react';
import { Customer } from 'src/types';
import css from 'styled-jsx/css';
import Image from '../atoms/Image';

const styles = css`
  /* stylelint-disable */
`;

export type CustomerSelectItemProps = {
  isSelected: boolean;
  customer: Pick<
    Customer,
    'id' | 'name' | 'displayName' | 'iconImageUrl' | 'type'
  >;
  onClick: () => void;
};

const CustomerSelectItem: FunctionComponent<CustomerSelectItemProps> = ({
  isSelected,
  customer,
  onClick,
}) => {
  return (
    <Fragment>
      {/*
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      */}
      <li
        className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
        id="listbox-option-0"
        role="option"
        onClick={onClick}
      >
        <div className="flex items-center">
          <Image
            src={customer.iconImageUrl ?? ''}
            className="h-6 w-6 flex-shrink-0 rounded-full"
          />
          {/* Selected: "font-semibold", Not Selected: "font-normal" */}
          <span
            className={`${
              isSelected ? 'font-semibold' : 'font-normal'
            } ml-3 block truncate`}
          >
            {customer.displayName}
          </span>
        </div>
        {/*
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        */}
        {isSelected && (
          <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
            {/* Heroicon name: mini/check */}
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </li>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default CustomerSelectItem;
