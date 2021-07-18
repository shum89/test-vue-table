import { render, fireEvent } from '@testing-library/vue';
import Form from '../../src/components/Form.vue';
import '@testing-library/jest-dom';

test('Review form submit', async () => {
  const fakePerson = {
    firstName: 'teSt',
    lastName: 'teStL',
    age: '20',
  };

  const { getByLabelText, getByText, emitted } = render(Form);

  const submitButton = getByText('Добавить');
  const firstNameInput = getByLabelText('Имя');
  const lastNameInput = getByLabelText('Фамилия');
  const ageInput = getByLabelText('Возраст');

  await fireEvent.update(firstNameInput, fakePerson.firstName);
  await fireEvent.update(lastNameInput, fakePerson.lastName);
  await fireEvent.update(ageInput, fakePerson.age);

  expect(submitButton).toBeEnabled();
  expect(submitButton).toHaveAttribute('type', 'submit');
  await fireEvent.click(submitButton);
  expect(emitted()).toHaveProperty('submit');
  expect(emitted().submit[0][0]).toMatchObject(fakePerson);
});
