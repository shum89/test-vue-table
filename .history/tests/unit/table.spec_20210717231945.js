import { render, fireEvent } from '@testing-library/vue';
import Table from '../../src/components/Table.vue';
import '@testing-library/jest-dom';

test('Review item Delete', async () => {
  const fakePerson = [
    {
      firstName: 'Test',
      lastName: 'TestL',
      age: '20',
      id: 1,
    },
  ];

  const { getByRole, emitted } = render(Table, {
    props: {
      list: fakePerson,
    },
  });
  // const firstName = getByText(fakePerson[0].firstName);
  // const lastName = getByText(fakePerson[0].lastName);
  // const age = getByText(fakePerson[0].age);
  const button = getByRole('button');
  await fireEvent.click(button);
  expect(emitted()).toHaveProperty('remove');
  console.log(emitted().remove[0][0]);
});
