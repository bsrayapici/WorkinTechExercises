
- State hookunu kullanarak bir sayac isimli state oluşturun. Bu state'in başlangıç değeri 0 olsun.
- 'stil' nesnesinde 'color' özelliği sabit olarak "blue" olarak belirlenmiş. Eğer sayı çiftse "royalblue", değilse "crimson" olacak şekilde kodu düzenle.
- JSX'te bazı statik kodlanmış bilgiler var. Buralarda süslü paranetezler içinde JS ifadeleri kullanarak dinamik hale getir. Sayı çift ise ekranda Sayı: 0 çift sayıdır, tek ise Sayı: 1 tek sayıdır metni görünecek şekilde kodu düzenle. tek çift için ternary if kullan. 
- Yardımcı fonksiyonları yaz. Tıklandığında sayac'ı bir artırmalı veya azaltmalı. Reset'e tıklandığında state'i sıfırlamalı.



import { useState } from "react";

export default function App() {
  // 📌 1. `showSpinner` state'i (Başlangıç: true)
  const [showSpinner, setShowSpinner] = useState(true);

  // 📌 2. Spinner'ı aç/kapat fonksiyonu
  const toggleDondurucu = () => {
    setShowSpinner(!showSpinner);
  };

  return (
    <div className="widget-spinner container">
      <h2>Spinner</h2>
      
      {/* 📌 Eğer `showSpinner` true ise göster, değilse gizle */}
      {showSpinner && (
        <div id="dondürücü" className="spinner">
          --+--
        </div>
      )}

      {/* 📌 Butonun metni duruma göre değiştirildi */}
      <button id="toggleDondurucu" onClick={toggleDondurucu}>
        {showSpinner ? "Gizle" : "Göster"}
      </button>
    </div>
  );
}
