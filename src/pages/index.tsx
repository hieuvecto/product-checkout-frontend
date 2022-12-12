import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Home, { HomeProps } from 'src/components/templates/Home';
import { API_URL } from 'src/constants';
import { getCheckoutItems } from 'src/ducks/checkouts/checkouts.selectors';
import { getSelectedCustomerName } from 'src/ducks/customers/customers.selectors';
import { Context, Customer, Item } from 'src/types';

type HomePageProps = Context & {
  customers: Customer[];
  items: Item[];
};

const HomePage: NextPage<HomePageProps> = ({
  customers,
  items,
}: HomePageProps) => {
  const customersSelector = useSelector((state) => state.customers);
  const checkoutsSelector = useSelector((state) => state.checkouts);

  const templateProps: HomeProps = {
    customers,
    items,
    checkoutItems: getCheckoutItems(checkoutsSelector),
    subtotal: '0',
    onSubmit: (e) => {
      e.preventDefault();
    },
    selectedCustomerName: getSelectedCustomerName(customersSelector),
  };
  return <Home {...templateProps} />;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await Promise.all([
    fetch(`${API_URL}/customers`),
    fetch(`${API_URL}/items`),
  ]);
  if (!res.every((r) => r.ok)) {
    throw new Error('Failed to fetch data');
  }
  const data = {
    customers: await res[0].json(),
    items: await res[1].json(),
  };

  // Pass data to the page via props
  return { props: { ...data } };
}

export default HomePage;
