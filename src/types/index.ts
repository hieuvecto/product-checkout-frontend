import BigNumber from 'bignumber.js';

export type Item = {
  id?: string;
  title: string;
  description?: string;
  price: string;
  imageUrl?: string;
  thumbnailUrl?: string;
};

export enum CustomerType {
  default = 'default',
  privileged = 'privileged',
}

export type Customer = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date | null;
  name: string;
  displayName: string;
  iconImageUrl: string | null;
  type: CustomerType;
  pricingRules: PricingRule[];
  checkouts: Checkout[];
};

export enum PricingRuleType {
  deal = 'deal',
  discount = 'discount',
}

export type PricingRule = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date | null;
  customerId: number;
  customer: Customer;
  itemId: number;
  item: Item;
  type: PricingRuleType;
  fromQuantity?: number | null;
  toQuantity?: number | null;
  discountPrice?: BigNumber | null;
  checkouts: Checkout[];
};

export enum CheckoutStatus {
  unpaid = 'unpaid',
  paid = 'paid',
  confirmed = 'confirmed',
  cancelled = 'cancelled',
}

export type Checkout = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date | null;
  customerId: number;
  customer: Customer;
  totalValue: BigNumber;
  discountedValue: BigNumber;
  pricingRules: PricingRule[];
  status: CheckoutStatus;
  paidAt: Date | null;
  confirmedAt: Date | null;
};

export type CheckoutItem = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date | null;
  checkoutId: number;
  checkout: Checkout;
  itemId: number;
  item: Item;
  quantity: number;
};

export type Context = {
  locale: string;
  req: { headers: any };
  res: any;
  params: any;
  query: any;
};
