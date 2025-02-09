Sample buttons altında bulunan 3 butonun aynısını dinamik olarak aşağıdaki buttons array'ini kullanarak oluştur ve generated buttons altına ekle.
Örnek butonlara index.html dosyasından bakabilirsin.

1- IconButton isimli bir fonksiyon oluştur.
- Adı data olan bir objeyi parametre olarak alsın..
- İçinde bir button element'i oluştursun ve button değişkeninde saklasın.
- classList ile tek satırda index.html'deki örnek gibi 2 class'ı eklesin.
- i element'i oluştur ve icon isimli değişkende sakla.
- data'daki iconClass özelliğini ata.
- icon'u button'a ekle.
- Bir textNode oluştur(araştırabilirsin) ve text değişkeninde sakla.
- text'i button'a ekle.
- Oluşturduğun butonu geri dön.

2- icons-buttons id'li element'i container isimli değişkende sakla.
3- buttons array'inde forEach yap ve IconButon ile oluşturduğun component'leri ekle.

import "./styles.css";
const buttons = [
        { btnText: "Aç", btnColor: "blue", iconClass: "fa-folder-open" },
        { btnText: "Düzenle", btnColor: "orange", iconClass: "fa-pen" },
        { btnText: "Sil", btnColor: "red", iconClass: "fa-trash" },
      ];


// Eğer `buttons` değişkeni zaten import ediliyorsa, tekrar tanımlama!
// import { buttons } from "./buttonsData"; // Örnek bir import olabilir

// ✅ 1. `IconButton` fonksiyonunu oluştur
function IconButton(data) {
    // 📌 1. Buton elementini oluştur
    const button = document.createElement("button");
    button.classList.add("btn", `btn-${data.btnColor}`); // 📌 Buton renk sınıfını ekle

    // 📌 2. i (ikon) elementini oluştur ve class'ını ata
    const icon = document.createElement("i");
    icon.classList.add("fa", data.iconClass); // 📌 İkon class'larını ekle

    // 📌 3. Buton içine icon'u ekle
    button.appendChild(icon);

    // 📌 4. Metin düğümü oluştur ve butona ekle
    const text = document.createTextNode(` ${data.btnText}`);
    button.appendChild(text);

    // ✅ 5. Buton bileşenini geri döndür
    return button;
}

// ✅ 2. `icon-buttons` id'li elementi seç
const container = document.getElementById("icon-buttons");

// ✅ 3. Eğer `buttons` değişkeni zaten global olarak tanımlıysa tekrar tanımlama
if (typeof buttons !== "undefined") {
    buttons.forEach(data => {
        const buttonComponent = IconButton(data);
        container.appendChild(buttonComponent);
    });
} else {
    console.error("buttons değişkeni bulunamadı!");
}
