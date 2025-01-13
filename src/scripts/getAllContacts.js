import { readContacts } from '../utils/readContacts.js';

// getAllContacts fonksiyonu:
export const getAllContacts = async () => {
  try {
    // db.json dosyasındaki tüm iletişim bilgilerini oku
    const contacts = await readContacts();

    // Okunan iletişim bilgilerini döndür
    return contacts;
  }
  catch (error) {
    console.error('İletişim bilgileri alınırken bir hata oluştu:', error);
    throw error;
  }
};

// Fonksiyonu test etmek için çağır ve sonucu konsola yazdır:
console.log(await getAllContacts());

