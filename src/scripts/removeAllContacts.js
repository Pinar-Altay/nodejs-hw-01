import { writeContacts } from '../utils/writeContacts.js';

// removeAllContacts fonksiyonu:
export const removeAllContacts = async () => {
    try {
        // Boş bir dizi ile dosyayı güncelle:
        await writeContacts([]);
        console.log("Tüm iletişim bilgileri başarıyla silindi.");
    }
    catch (error) {
        console.error("Tüm iletişim bilgileri silinirken bir hata oluştu:", error);
    }
};

// Fonksiyonu çağır:
removeAllContacts();

