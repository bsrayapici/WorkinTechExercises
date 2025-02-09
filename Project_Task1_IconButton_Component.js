Bugün şirkette faydalı bir eğitim aldınız. Bu eğitimde, FontAwesome isimli bir kütüphaneyi kullanarak birbiriyle uyumlu bir çok iconu projelerinde nasıl kullanabileceğini öğrendin.

Bunu pratik etmeniz için de size 1-2 örnek proje verdiler.

Bu projede, dinamik olarak özel tasarıma sahip icon button componenti oluşturacağız. Buttonlar için styling UX developer tarafından önden hazırlanmış. Bize ise sadece buton üreten fonksiyonu yazma görevi düşüyor. Gerekli detaylar components klasörü içindeki iconButton.js içinde.

İpucu: FontAwesome kütüphanesine bakabilirsin.
İpucu: createElement ve appendChild metodlarına ihtiyaç duyabilirsin.

  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/

function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.classList.add('btn', `btn-${btnColor}`);

  const icon = document.createElement('i');
  icon.className = iconClass;
  button.appendChild(icon);

  const text = document.createTextNode(`${btnText}`);
  button.appendChild(text);

  return button;
}
const container = document.getElementById('icon-buttons');
const buttons = [
  { btnText: 'Aç', btnColor: 'blue', iconClass: 'fa fa-folder-open' },
  { btnText: 'Düzenle', btnColor: 'orange', iconClass: 'fa fa-pen' },
  { btnText: 'Sil', btnColor: 'red', iconClass: 'fa fa-trash' },
];

// ✅ 4. `buttons` dizisini `forEach` ile dön ve `IconButton` ile her butonu oluşturup ekle
buttons.forEach(({ btnText, btnColor, iconClass }) => {
  const buttonComponent = IconButton(btnText, btnColor, iconClass); // 📌 Buton component'ini oluştur
  container.appendChild(buttonComponent); // 📌 `icon-buttons` içerisine ekle
});
