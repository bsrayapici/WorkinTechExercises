// Categories component'i mount olduğunda https://api.example.com/category adresine get isteği atıp aldığı response'da gelen veriyi(data) categories state'ine ekleyen kodu yaz.
// İpucu: import'ları unutma
//useEffect Hook’u ile API çağrısı yaptık.
//	•	Boş bağımlılık dizisi ([]) verdik, böylece component sadece ilk mount olduğunda çağrı yapar.
//	2.	Axios ile GET isteği attık.
//	•	Başarılı olursa (.then() bloğu): Gelen response.data değerini categories state’ine ekledik.
//	•	Hata alırsa (.catch() bloğu): Konsola hata mesajını yazdırdık.
//	3.	CategoryList component’ine categories prop olarak ilettik.
//	•	Böylece gelen verileri liste içinde gösterebiliriz.

import { useState, useEffect } from "react"; // ✅ useEffect import edildi!
import axios from "axios";
import CategoryList from "./CategoryList.js"; 

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("Categories bileşeni mount oldu! Veri çekiliyor...");
    
    axios
      .get("https://api.example.com/category")
      .then((response) => {
        setCategories(response.data); // ✅ API’den gelen veriyi state'e kaydet
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });

  }, []); // 🔥 Sadece component mount olduğunda çalışır

  return <CategoryList categories={categories} />;
}
