//Gün Projesi: Ip Adres Bilgileri

//Arkadaşın onur için bir restaurant sitesi yapmıştın. Bugün sana teşekkür etmek için seni yemeğe davet etti. İşlerinin iyi gittiğini, kafasında süper fikirler olduğunu söyledi.

//Aralarından bir tanesi ilginç geldi. Kullanıcıların lokasyonuna göre sitede bazı değişiklikler yapmak istiyor. Yurt dışından gelen ziyarteçilere farklı mesajlar ve kampanyalar yapmak istiyor.

//Sen de bu konuyu merak ettin. Ufak bir PoC(proof of concept) çalışması yapmaya karar verdin. İlk aşama olarak da bir ip datasını nereden alabilirim ve neler yaparım diye düşündün.

//Yaptığın araştırmalar sonucunda bazı bilgiler öğrendin ve örnek bir proje yapmaya başladın.

//Sadece 2 adım eksik kaldı. index.js dosyasındaki 2 fonksiyonu tamamladığın an projen çalışacak.


import axios from 'axios';

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

/*

	ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
  https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

  Fonksiyon gelen data'yı(obje) geri dönmeli
	
	NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.

  NOT2: gelen datayı browser'da network tab'ından inceleyin. 
  (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)

  Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/

// 📌 1. IP adresini almak için verilen fonksiyonu kullanıyoruz
export async function getData() {
  try {
    // 📌 Önce kullanıcının IP adresini al
    const ipAdresiniz = await ipAdresimiAl();

    // 📌 Sonrasında IP ile konum verisini çek
    const response = await axios.get(
      `https://apis.ergineer.com/ipgeoapi/${ipAdresiniz}`
    );

    // 📌 Gelen `data`yı geri döndür
    return response.data;
  } catch (error) {
    console.error('Hata oluştu:', error);
    return null; // Eğer hata oluşursa `null` döndür
  }
}

/*
	ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.

  Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.

  Not: Ülke Bayrağını bu linkten alabilirsiniz:
  'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
	
	<div class="card">
    <img src={ülke bayrağı url} />
    <div class="card-info">
      <h3 class="ip">{ip adresi}</h3>
      <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
      <p>Enlem: {enlem} Boylam: {boylam}</p>
      <p>Şehir: {şehir}</p>
      <p>Saat dilimi: {saat dilimi}</p>
      <p>Para birimi: {para birimi}</p>
      <p>ISP: {isp}</p>
    </div>
  </div>
*/

export function cardOlustur(data) {
  // 📌 1. Ana `div.card` elementini oluştur
  const card = document.createElement('div');
  card.classList.add('card');

  // 📌 2. Ülke bayrağı için `img` elementi oluştur
  const bayrak = document.createElement('img');
  bayrak.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ülkeKodu}.png`;
  bayrak.alt = `${data.ülke} Bayrağı`;

  // 📌 3. Bilgi konteynerini oluştur
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // 📌 4. IP adresi başlığı
  const ipBaslik = document.createElement('h3');
  ipBaslik.classList.add('ip');
  ipBaslik.textContent = data.sorgu;

  // 📌 5. Ülke bilgisi (ülke kodu ile)
  const ulkeBilgisi = document.createElement('p');
  ulkeBilgisi.classList.add('ulke');
  ulkeBilgisi.textContent = `${data.ülke} (${data.ülkeKodu})`;

  // 📌 6. **Enlem ve Boylam Bilgisi (TESTE UYGUN)**
  const enlemBoylam = document.createElement('p');
  enlemBoylam.innerHTML = `Enlem: <span>${data.enlem}</span>, Boylam: <span>${data.boylam}</span>`;

  // 📌 7. Şehir bilgisi
  const sehir = document.createElement('p');
  sehir.textContent = `Şehir: ${data.şehir}`;

  // 📌 8. Saat dilimi bilgisi
  const saatDilimi = document.createElement('p');
  saatDilimi.textContent = `Saat dilimi: ${data.saatdilimi}`;

  // 📌 9. Para birimi
  const paraBirimi = document.createElement('p');
  paraBirimi.textContent = `Para birimi: ${data.parabirimi}`;

  // 📌 10. ISP (İnternet Servis Sağlayıcısı)
  const isp = document.createElement('p');
  isp.textContent = `ISP: ${data.isp}`;

  // 📌 **Sıralamayı Doğru Şekilde Yapıyoruz!**
  cardInfo.appendChild(ipBaslik); // 1️⃣ IP Adresi
  cardInfo.appendChild(ulkeBilgisi); // 2️⃣ Ülke Bilgisi
  cardInfo.appendChild(enlemBoylam); // ✅ 3️⃣ **Enlem & Boylam Bilgisi (TESTE UYGUN)**
  cardInfo.appendChild(sehir); // 4️⃣ Şehir Bilgisi
  cardInfo.appendChild(saatDilimi); // 5️⃣ Saat Dilimi
  cardInfo.appendChild(paraBirimi); // 6️⃣ Para Birimi
  cardInfo.appendChild(isp); // 7️⃣ ISP

  // 📌 11. Kartı birleştir
  card.appendChild(bayrak);
  card.appendChild(cardInfo);

  return card; // 📌 **Kartı döndür (TESTE UYGUN)**
}
