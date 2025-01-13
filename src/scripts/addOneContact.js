import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// addOneContact fonksiyonu:
export const addOneContact = async () => {
    try {
    // Mevcut iletişim bilgilerini oku:
    const contacts = await readContacts();

    // Yeni bir rastgele iletişim bilgisi oluştur:
    const newContact = createFakeContact();

    // Yeni iletişim bilgilerini mevcut diziye ekle:
    contacts.push(newContact);

    // Güncellenmiş diziyi dosyaya yaz:
    await writeContacts(contacts);

    console.log('Yeni bir iletişim bilgisi başarıyla eklendi:', newContact);
    }
    catch (error) {
    console.error('İletişim bilgisi eklenirken bir hata oluştu:', error);
  }
};

// Fonksiyonu çağır:
addOneContact();
