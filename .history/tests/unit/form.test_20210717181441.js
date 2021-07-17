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
  const firstNameInput = getByLabelText('Имя');
  const lastNameInput = getByLabelText('Фамилия');
  const ageInput = getByLabelText('Возраст');

  await fireEvent.update(firstNameInput, fakePerson.firstName);
  await fireEvent.update(lastNameInput, fakePerson.firstName);
  await fireEvent.update(phoneInput, fakePerson.firstName);
  expect(submitButton).toBeEnabled();
  expect(submitButton).toHaveAttribute('type', 'submit');
});
