import { readContacts } from '../utils/readContacts.js'; // Yardımcı fonksiyon
import { writeContacts } from '../utils/writeContacts.js'; // Yardımcı fonksiyon
import { createFakeContact } from '../utils/createFakeContact.js'; // Rastgele kişi oluşturan bir fonksiyon.

// generateContacts fonksiyonunu:
const generateContacts = async (number) => {
    try {
    // 1. Mevcut kişileri oku:
    const existingContacts = await readContacts();

    // 2. Rastgele yeni kişiler oluştur:
    const newContacts = [];
    for (let i = 0; i < number; i++) { // Belirtilen sayıda yeni kişi
      newContacts.push(createFakeContact()); // createFakeContact ile rastgele kişi
    }

    // 3. Yeni kişileri mevcut kişilere ekle
    const updatedContacts = [...existingContacts, ...newContacts];

    // 4. Güncellenen listeyi dosyaya yaz
    await writeContacts(updatedContacts);

    console.log(`${number} yeni kişi başarıyla eklendi.`);
    }
    catch (error) {
    console.error('Kişi oluşturulurken bir hata oluştu:', error);
  }
};

// Örneğin: 5 yeni kişi oluştur.
generateContacts(5);
