/*App component'i mount olduğunda https://reqres.in/api/users/1 adresine istek atsın ve başarılı bir istek sonucunda gelen data'daki url'i avatar state'ine eklesin.

- İpucu: gelen reponse'daki data'yı konsola yazdırıp ne geldiğine bakabilirsin.*/


import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/1")
      .then((response) => {
        console.log(response.data); // Gelen veriyi konsola yazdır
        setAvatar(response.data.data.avatar); // Avatar URL'ini state'e kaydet
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []); // Boş dependency array => Sadece component mount olduğunda çalışır

  return <div>{avatar && <img src={avatar} alt="User Avatar" />}</div>;
}
