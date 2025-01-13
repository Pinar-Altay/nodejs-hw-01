import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises'; // fs/promises modülünü içe aktardık: Asenkron işlemleri daha okunabilir hale getiriyor.

// readContacts fonksiyonunu: 
export const readContacts = async () => {
    // try-catch bloğu içinde işlemleri yaparak hata durumunda programın çökmesini engelliyor!
    try {
    const data = await readFile(PATH_DB, 'utf-8'); // Dosyayı okuyoruz (utf-8 formatında).
    return JSON.parse(data); // Okunan veriyi JSON formatına çeviriyoruz.
    }
    catch (error) {
    // Hata durumunda yapılacak işlemleri belirtiyoruz.
    console.error('Error reading contacts:', error);
    throw error;
    }
};
