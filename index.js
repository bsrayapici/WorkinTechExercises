/* kodlar aşağıya */
// third-header class'ına sahip tüm elemanları seç
const headers = document.getElementsByClassName("third-header");

// Eğer headers boşsa hata mesajı yazdır
if (headers.length === 0) {
  console.log("Can't found");
} else {
  // Tüm elemanları dolaş
  for (let i = 0; i < headers.length; i++) {
    let text = headers[i].textContent; // Mevcut içeriği al
    let newText = ""; // Yeni metin için boş bir değişken oluştur

    // İçeriğindeki her karakteri kontrol et
    for (let j = 0; j < text.length; j++) {
      if (text[j] === ".") {
        newText += "!"; // Nokta varsa ünlem ile değiştir
      } else {
        newText += text[j]; // Diğer karakterleri aynen ekle
      }
    }

    // Güncellenmiş içeriği elemanın içine tekrar yaz
    headers[i].textContent = newText;
  }
}