import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.string.uuid(), // benzersiz bir kimlik
  name: faker.person.fullName(), // tam isimler
  phone: faker.phone.number(), // telefon numarası
  email: faker.internet.email(), // e-posta adresi
  job: faker.person.jobTitle(), // meslek adları 
});
