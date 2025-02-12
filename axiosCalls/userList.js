1- userList id'li element'i get metodu ile al ve userList isimli bir değişkende sakla.
2- Axios ile https://jsonplaceholder.typicode.com/users adresine get isteği at. Success durumunda;
- İlk olarak userList içindeki "Yükleniyor" mesajını sil.
- response'da gelen veriyi(data) users isimli bir değişkende sakla.
- users'da forEach ile her bir user'ı al.
- li element'ini oluştur ve listItem isimli değişkende sakla.
- span element'ini oluştur ve name isimli değişkende sakla, içine kullanıcının ismini ekle ve kendisini listItem'a ekle.
- textNode oluştur ve içine backtick kullanarak email adresini ekle ve email isimli değişkende sakla (aradaki boşluklara ve - karakterine dikkat). listItem'a ekle.
- userList'e listItem'ı ekle.
3- axios'un bir hata alması durumunda userList'de Bir hata oluştu. Lütfen daha sonra tekrar deneyin. metnini yazdır. 
- Hata objesini konsola yazdır.

  import axios from "axios";

// 📌 1. `userList` id'li elementi seç ve `userList` değişkenine ata
const userList = document.getElementById("userList");

// 📌 2. API'ye GET isteği at
async function fetchUsers() {
  try {
    // 📌 Axios ile API'den kullanıcı verisini çek
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    // 📌 Gelen response içindeki `data`yı `users` değişkenine ata
    const users = response.data;

    // 📌 "Yükleniyor" mesajını temizle
    userList.textContent = "";

    // 📌 3. Kullanıcıları listelemek için `forEach` döngüsü
    users.forEach(user => {
      // 📌 Yeni `li` elementi oluştur
      const listItem = document.createElement("li");

      // 📌 Kullanıcı adını içeren `span` elementi oluştur
      const name = document.createElement("span");
      name.textContent = user.name;
      listItem.appendChild(name);

      // 📌 E-posta adresi için textNode oluştur (Backtick kullanarak)
      const email = document.createTextNode(` - ${user.email}`);
      listItem.appendChild(email);

      // 📌 `userList` içine `listItem` ekle
      userList.appendChild(listItem);
    });

  } catch (error) {
    // 📌 Hata oluşursa mesajı ekrana yazdır
    userList.textContent = "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
    console.error("Hata oluştu:", error);
  }
}

// 📌 Fonksiyonu çağır
fetchUsers();
