// Menü'de kullanacağımız haber başlıkları menuelemanlari isimli dizide, aşağıda.
let menuElemanlari = [
  'Gündem',
  'Dünya',
  'Ekonomi',
  'Yazarlar',
  'Burç Yorumları',
  'Diğer',
];

/*
Adım 1: menuelemanları isimli dizideki haber başlıklarını içeren bir menü oluşturmak için 'MenuYapici' adlı bir bileşen yazın.
Bu 'MenuYapici' fonksiyonu menü elemanları dizisini tek argüman olarak alıp aşağıdaki yapıda bir öğe döndürecek.

<div class="menu">
  <ul>
    {tüm menü elemanları <li> içlerine}
  </ul>
</div>

Adım 2: Fonksiyonun içinde, argüman olarak gelen diziyi kullanarak bir döngü yapın ve bir liste öğesi(<li>) <ul>'ye ekleyin

Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü butonunu seçin (`index.html` içinde `menu-button` sınıfına sahip element) ve buna  bir `click` event listener ekleyin. Butona her tıklanıldığında div.menu classına('menu' class'ına sahip olan div) `menu--open` ekleyip/silecek(toggle).

Adım 4: 'MenuYapici' fonksiyonunda oluştrulan div.menu'yü döndürmeyi unutmayın.

Adım 5: 'MenuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header class'ına sahip div'e ekleyin.
*/
// ✅ 1. 'MenuYapici' fonksiyonunu oluştur
function MenuYapici(menuElemanlari) {
  // 📌 1. Ana 'div' oluştur ve 'menu' class'ını ekle
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  // 📌 2. Liste (`ul`) oluştur
  const ul = document.createElement('ul');

  // 📌 3. Döngü ile her menü elemanını oluştur ve listeye ekle
  menuElemanlari.forEach((eleman) => {
    const li = document.createElement('li');
    li.textContent = eleman;
    ul.appendChild(li);
  });

  // 📌 4. `ul`'yi `menuDiv` içine ekle
  menuDiv.appendChild(ul);

  // 📌 5. Menü butonunu seç ve `click` eventi ekle
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
  });

  // ✅ 6. Oluşturulan menü bileşenini geri döndür
  return menuDiv;
}

// ✅ 7. `.header` class'ına sahip elementi seç
const header = document.querySelector('.header');

// ✅ 8. `MenuYapici` fonksiyonunu çağırarak menüyü oluştur ve `.header` içine ekle
const menuComponent = MenuYapici(menuElemanlari);
header.appendChild(menuComponent);
