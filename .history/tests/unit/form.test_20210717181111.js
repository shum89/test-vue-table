import { render, fireEvent } from '@testing-library/vue';
import App from '../../src/App.vue';

test('Review form submit', async () => {
  const fakePerson = {
    firstName: 'teSt',
    lastName: 'teSt',
    age: '20',
  };

  const { getByLabelText, getByText, getByRole, getByPlaceholderText, emitted } = render(App);

  const submitButton = getByText('Добавить');
  expect(submitButton).toBeEnabled();
  expect(submitButton).toHaveAttribute('type', 'submit');
});
