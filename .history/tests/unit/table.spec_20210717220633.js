import { render, fireEvent } from '@testing-library/vue';
import Table from '../../src/components/Table.vue';
import '@testing-library/jest-dom';

test('Review form submit', async () => {
  const fakePerson = [
    {
      firstName: 'teSt',
      lastName: 'teStL',
      age: '20',
    },
  ];

  const { getByText } = render(Table, {
    props: {
      list: fakePerson,
    },
  });
  const name = g;
});
