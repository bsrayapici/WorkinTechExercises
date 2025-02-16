/*
Eğitim platformunuz için basit bir dersi tamamlama komponenti oluşturun. Komponent şunları içermeli:

- Tamamlanma durumu (state olarak tutulacak): isCompleted.
- toggleCompletion fonksiyonu buton tıklanınca tamamlanma değerini true veya false olarak değiştirecek.
- Tamamlandı ise  ✅ Tamamlandı, değil ise 📝 Devam Ediyor yazmalı.(Hep ternary if kullan)
- Buton, tamamlanma durumuna göre farklı stil olmalı: btn-completed veya btn-pending.
- buton'da Tamamla veya Geri Al yazmalı.
*/

import { useState } from "react";

export default function App(){
const [isCompleted, setIsCompleted] = useState(true);

  // Tamamlanma durumunu değiştiren fonksiyon 

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted); //tamamlanma durumunu tersine çevir
  };

  // Bu satırın amacı, tamamlama durumuna (isCompleted) bağlı olarak div’in CSS sınıfını (className) dinamik olarak değiştirmek.
  //className="course-item" Sabittir, her zaman bu sınıf uygulanır: isCompleted Değerine Göre completed veya pending Eklenir.
  return (
    <div className = {`course-item ${isCompleted ? "completed" : "pending"} `}>
      <h3>Workintech Full Stack Programı</h3>
    <div className = "status">

  // Tamamlanma durumu için ternary if kullanıldı.
  <span> {isCompleted ? "Tamamlandı" : "Devam Ediyor"} </span>

// Butonun stilini ve metnini tamamlanma durumuna göre değiştir

<button onClick={toggleCompletion} className = {isCompleted ? "btn-completed" : "btn-pending"}>{isCompleted ? "Geri Al" : "Tamamla" }</button>
  </div>
  </div>

  );
}

Çalışma Mantığı

1️⃣ Başlangıçta isCompleted = true olduğundan:
	•	✅ Tamamlandı yazısı görünür.
	•	Butonun metni "Geri Al" olur.
	•	Buton "btn-completed" sınıfına sahip olur.

2️⃣ “Geri Al” butonuna basınca isCompleted = false olur:
	•	📝 Devam Ediyor yazısı görünür.
	•	Butonun metni "Tamamla" olur.
	•	Buton "btn-pending" sınıfına sahip olur.

🎯 Bu haliyle kod tam işlevsel ve en iyi React pratiklerine uygundur! 🚀
