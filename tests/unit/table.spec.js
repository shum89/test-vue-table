import { render, fireEvent } from '@testing-library/vue';
import Table from '../../src/components/Table.vue';
import '@testing-library/jest-dom';

test('Review item Delete', async () => {
  const fakePerson = [
    {
      firstName: 'Test',
      lastName: 'TestL',
      age: '20',
      id: 23442343,
    },
  ];

  const { getByRole, emitted } = render(Table, {
    props: {
      list: fakePerson,
    },
  });

  const button = getByRole('button');
  await fireEvent.click(button);
  expect(emitted()).toHaveProperty('remove');
  expect(emitted().remove[0][0]).toBe(23442343);
});
