
State hookunu kullanarak bir showSpinner isimli state oluşturun. Bu state'in başlangıç değeri true olsun.
- Spinner ekranda sürekli görünüyor, JSX'te gerekli düzenlemeyi yap.
- Yardımcı fonksiyonu yaz. 
- Butona tıklandığında spinner göstermeli veya gizlemeli. buton üzerinde Gizle veya Göster yasın.
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
