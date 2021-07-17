import { render, fireEvent } from '@testing-library/vue';
import App from '../../src/App.vue';
import '@testing-library/jest-dom';

test('Review form submit', async () => {
  const fakePerson = {
    firstName: 'teSt',
    lastName: 'teStL',
    age: '20',
  };

  const { getByLabelText, getByText } = render(App);

  const submitButton = getByText('Добавить');
  const firstNameInput = getByLabelText('Имя');
  const lastNameInput = getByLabelText('Фамилия');
  const ageInput = getByLabelText('Возраст');

  await fireEvent.update(firstNameInput, fakePerson.lastName);
  await fireEvent.update(lastNameInput, fakePerson.firstName);
  await fireEvent.update(ageInput, fakePerson.age);

  expect(submitButton).toBeEnabled();
  expect(submitButton).toHaveAttribute('type', 'submit');
  await fireEvent.click(submitButton);
  const age = getByText('20');
  const firstName = getByText('Test');
  const lastName = getByText('Testl');
  expect(age).toHaveTextContent('20');
  expect(firstName).toHaveTextContent('Test');
  expect(lastName).toHaveTextContent('Testl');
});
