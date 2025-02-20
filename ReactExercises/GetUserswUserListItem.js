/* 1- App component'inde users isimli bir state tanımla. Başlangıç değeri [] olsun.
2- Component mount olduğunda https://jsonplaceholder.typicode.com/users adresine axios isteği at:
- success durumunda response'da gelen data'yı state'e ekle.
- fail durumunda oluşan error objesini konsola yazdır.
3- ul#userList element'i içinde users state'indeki her bir item'ı Item component'i ile map'le.
- index'i key değeri olarak kullanabilirsin. */

import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item"; // Item component'inin doğru import edildiğinden emin ol

export default function App() {
  // 📌 1. State Tanımlama
  const [users, setUsers] = useState([]);

  // 📌 2. Component Mount olduğunda API'den veri çekme
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => console.error("Veri Çekme Hatası", error));
  }, []); // 📌 [] bağımlılık array'i ekleyerek yalnızca bir kez çalışmasını sağlıyoruz.

  return (
    <>
      <h1>Kullanıcı Listesi</h1>
      <ul id="userList">
        {users.map((user, index) => (
          <Item key={index} user={user} />
        ))}
      </ul>
    </>
  );
}
