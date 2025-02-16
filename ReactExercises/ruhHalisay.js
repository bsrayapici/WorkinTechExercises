Aşağıdaki React uygulamasını tamamla.  


- State hookunu kullanarak bir sayruhHaliac isimli state oluşturun. 
  Bu state'in başlangıç değeri ilkRuhHali olsun.
- 'stil' nesnesinde 'color' özelliği sabit olarak "royalblue" olarak belirlenmiş. 
  Eğer ruhHali mutlu ise "royalblue", değilse "crimson" olacak şekilde kodu düzenle.
- JSX'te bazı statik kodlanmış bilgiler var. Buralarda süslü paranetezler içinde JS ifadeleri kullanarak dinamik hale getir. 
- Yardımcı fonksiyonları yaz. 
- class="code">Reset'e tıklandığında state'i ilkRuhHali yapsın.


import { useState } from "react";

const ilkRuhHali = "Nasıl hissettiğimi bilmiyorum :-|";
const mutluRuhHali = "Oldukça mutlu :)";
const uzgunRuhHali = "Oldukça üzgün :(";

export default function App() {
  // 📌 1. `useState` ile ruh hali state'ini oluştur
  const [ruhHali, setRuhHali] = useState(ilkRuhHali);

  // 📌 2. Mutlu etme fonksiyonu
  const mutluEt = () => {
    setRuhHali(mutluRuhHali);
  };

  // 📌 3. Üzgün yapma fonksiyonu
  const uZ = () => {
    setRuhHali(uzgunRuhHali);
  };

  // 📌 4. Resetleme fonksiyonu
  const reset = () => {
    setRuhHali(ilkRuhHali);
  };

  // 📌 5. Dinamik stil (Ruh haline göre renk değiştir)
  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: ruhHali === mutluRuhHali ? "royalblue" : ruhHali === uzgunRuhHali ? "crimson" : "black",
  };

  return (
    <div className="widget-moods container">
      <h2>Ruh Halleri</h2>
      <div id="ruhHali" style={stil}>
        {ruhHali} {/* 📌 Ruh hali dinamik hale getirildi */}
      </div>
      <div>
        <button id="mutluEt" onClick={mutluEt}>
          Mutlu Et
        </button>
        <button id="uz" onClick={uZ}>
          Üz
        </button>
        <button id="resetRuhHali" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
