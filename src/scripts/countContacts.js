import { readContacts } from '../utils/readContacts.js';

// countContacts fonksiyonu:
export const countContacts = async () => {
    try {
        // İletişim bilgilerini oku:
        const contacts = await readContacts();

        // İletişim bilgisi sayısını döndür:
        return contacts.length;
    }
    catch (error) {
        // Hata durumunda konsola yazdır ve 0 döndür:
        console.error("Kişi sayısı alınırken bir hata oluştu:", error);
        return 0;
    }
};

// Fonksiyonu çağır ve sonucu yazdır:
console.log(await countContacts());
