import axios from "axios";

// 📌 1. Gerekli HTML elementlerini değişkenlere ata
const form = document.getElementById("postForm");
const postDetails = document.getElementById("postDetails");

// 📌 2. Form'a submit event listener ekle
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // 📌 Sayfanın yenilenmesini engelle

  // 📌 3. Kullanıcının girdiği post ID değerini AL (her submit'te güncellenir)
  const postId = document.getElementById("postId").value;

  try {
    // 📌 4. API'ye GET isteği at
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    // 📌 5. Gelen response'dan post verisini al
    const post = response.data;

    // 📌 6. `postDetails` içeriğini temizle
    postDetails.textContent = "";

    // 📌 7. h2 ve p elementleri oluştur
    const titleElement = document.createElement("h2");
    const contentElement = document.createElement("p");

    // 📌 8. Elementlere API’den gelen verileri ekle
    titleElement.textContent = post.title;
    contentElement.textContent = post.body;

    // 📌 9. `postDetails` içerisine ekle
    postDetails.appendChild(titleElement);
    postDetails.appendChild(contentElement);
  } catch (error) {
    // 📌 10. Hata olursa mesaj yazdır ve hatayı konsola logla
    postDetails.textContent = "Gönderi bulunamadı veya bir hata oluştu.";
    console.error("Hata:", error);
  }
});
