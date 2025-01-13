import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

// writeContacts fonksiyonunu:
export const writeContacts = async (updatedContacts) => {
    try {
    const data = JSON.stringify(updatedContacts, null, 2); // Veriyi JSON formatına çeviriyoruz.
    await writeFile(PATH_DB, data, 'utf-8'); // JSON formatını dosyaya yazıyoruz (utf-8 ile).
    }
    catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
