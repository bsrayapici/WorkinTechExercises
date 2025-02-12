
//Eğitim platformunuzda ders kartı (CourseCard) komponenti oluşturuyorsunuz. Aşağıdaki JSX kodunda hata ve eksikler var. Düzelt.

import { useState } from "react";

function CourseCard() {
  // 📌 1. `isPublished` state olarak tanımlandı (Başlangıç: `true`)
  const [isPublished, setIsPublished] = useState(true);

  // 📌 2. Butona tıklandığında durumu değiştiren fonksiyon
  function handleStatus() {
    setIsPublished(!isPublished); // `isPublished` değerini tersine çevir
  }

  return (
    <div className="card">
      <h2>React Temelleri</h2> 
      <p>{isPublished ? "Yayında" : "Taslak"}</p> {/* 📌 Durum gösterildi */}
      
      {/* 📌 Buton metni de dinamik hale getirildi */}
      <button onClick={handleStatus}>
        {isPublished ? "Yayından Kaldır" : "Yayınla"}
      </button>
    </div>
  );
}

export default CourseCard;
