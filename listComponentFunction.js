Bir liste component'i oluşturan fonksiyon yaz. String'lerden oluşan bir array alsın. ["Item 1", "Item 2", "Item 3"] için çalıştır ve oluşan component'i id'si app olan element'e ekle.

- Fonksiyonun adı Liste olsun.
- Bir parametre alsın: adı items olan stringlerden oluşan bir array.
- Bir ul element'i oluştursun ve bunu liste isimli değişkende saklasın.
- Gelen argüman için forEach döngüsü yap.
- Bu döngüde li element'i oluştur ve li isimli değişkende sakla.
- li element'ine metin olarak array'deki item'ı ekle.
- li element'ini listeye ekle.
- Bu fonskiyonu ["Item 1", "Item 2", "Item 3"] için çalıştır ve oluşan component'i id'si app olan element'e ekle.

---------------------

import "./styles.css";
function Liste(items) {
    // ✅ 1. `ul` elementini oluştur ve `liste` değişkeninde sakla
    const liste = document.createElement("ul");

    // ✅ 2. `items` dizisini `forEach` ile dön ve her öğeyi `li` olarak ekle
    items.forEach(item => {
        const li = document.createElement("li"); // Yeni bir `li` oluştur
        li.textContent = item; // `li` içeriğini belirle
        liste.appendChild(li); // `li` öğesini `liste` içine ekle
    });

    // ✅ 3. Oluşturulan listeyi döndür
    return liste;
}

// ✅ 4. Liste component’ini oluştur
const items = ["Item 1", "Item 2", "Item 3"];
const listComponent = Liste(items);

// ✅ 5. Oluşan listeyi `id="app"` olan elemana ekle
document.getElementById("app").appendChild(listComponent);
