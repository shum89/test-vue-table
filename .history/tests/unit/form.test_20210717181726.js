import { render, fireEvent } from '@testing-library/vue';
import App from '../../src/App.vue';

test('Review form submit', async () => {
  const fakePerson = {
    firstName: 'teSt',
    lastName: 'teSt',
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

  expect(emitted().submit[0][0]).toMatchObject({ firstName: 'Test', lastName: 'Test', age: '20' });
});
