/*
1- accounts state'inde sadece admin rolüne sahip olan hesdapları filtrele ve admins isimli bir değişkende sakla. 
2- ul element'i içinde admins için .map yap. Item component'ini kullan ve her bir item'ı user porp'u olarak gönder. Key değerini unutma(index).

- .map'de tanımlayacağın callback function'da return kullanma!
- .map'de tanımlayacağın callback function'da parametreleri item ve index olarak tanımla.*/

import { useState } from "react";
import Item from "./Item.js";

export default function Liste() {
  const [accounts, setAccounts] = useState([
    { name: "Emre", role: "admin" },
    { name: "Fatih", role: "super-user" },
    { name: "Emir", role: "admin" },
    { name: "Harun", role: "user" }
  ]);

  // 1- Sadece admin hesaplarını filtrele
  const admins = accounts.filter((account) => account.role === "admin");

  return (
    <ul>
      {/* 2- .map() ile admins listesini oluştur */}
      {admins.map((admin, index) => (
        <Item key={index} user={admin} />
      ))}
    </ul>
  );
}
