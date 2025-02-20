//App component'inde users isimli bir state tanımla. Başlangıç değeri liste array'i olsun.
//div.list-container element'i içinde users state'indeki her bir item'ı Item component'i ile map'le.

//-İpucu: listede aynı isimler var. Key değerini ne yapabilirsin?
//🔥 Sonuç:
//	•	React, key olmadan listeyi yönetemez ve hata verebilir.
//	•	Eğer key kullanmazsak, gereksiz render işlemleri olur ve performans düşer.
//	•	Liste değişebiliyorsa, index yerine benzersiz bir id kullanmak daha iyi olur. 🚀

/*const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ayşe" },
  { id: 3, name: "Mehmet" }
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li> // ✅ Benzersiz ID kullanarak doğru güncellemeler sağlandı.
    ))}
  </ul>
); */

import { useState } from "react";
import Item from "./Item.js";

const liste = ["Emre", "Emre", "Hatice", "Hatice", "Melisa", "Tarık", "Ceren"];

export default function App() {
  const [users, setUsers] = useState(liste); // ✅ users state'i oluşturuldu

  return (
    <div className="list-container">
      {users.map((name, index) => (
        <Item key={`${name}-${index}`} name={name} />
      ))}
    </div>
  );
}
