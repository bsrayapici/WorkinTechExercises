/* Aşağıdaki React uygulamasında coin isimli bir state tanımlayın.  
- Başlangıç değeri 0 olsun. 
- Aşağıdaki component yapısında ekranda gösterin. 
- Buton tıklandıkça 1'er 1'er artsın veya azalsın. (increase ve decrease isimli 2 fonksiyon tanımlayın)

<div class="display">
    <p>0</p>
    <button>Artır</button>
    <button>Azalt</button>
</div> */

import { useState } from "react";

export default function App() {
  // 📌 Coin state'i tanımlandı (Başlangıç: 0)
  const [coin, setCoin] = useState(0);

  // 📌 Artırma fonksiyonu
  const increase = () => {
    setCoin(coin + 1);
  };

  // 📌 Azaltma fonksiyonu
  const decrease = () => {
    setCoin(coin - 1);
  };

  return (
    <div className="display">
      <p>{coin}</p> {/* 📌 Coin değerini göster */}
      <button onClick={increase}>Artır</button> {/* 📌 Artır butonu */}
      <button onClick={decrease}>Azalt</button> {/* 📌 Azalt butonu */}
    </div>
  );
}
