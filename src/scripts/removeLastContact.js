import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

// removeLastContact fonksiyonu:
export const removeLastContact = async () => {
    try {
        // Mevcut iletişim bilgilerini oku:
        const contacts = await readContacts();

        // Dizi boş değilse son elemanı kaldır:
        if (contacts.length > 0) {
            contacts.pop(); // Dizinin son elemanını siler
            await writeContacts(contacts); // Güncellenmiş diziyi yazdır
            console.log("Son iletişim bilgisi başarıyla silindi.");
        } else {
            console.log("Silinecek bir iletişim bilgisi bulunamadı.");
        }
    } catch (error) {
        console.error("Son iletişim bilgisi silinirken bir hata oluştu:", error);
    }
};

// Fonksiyonu çağır:
removeLastContact();
