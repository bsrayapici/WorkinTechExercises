/*App component'i mount olduğunda https://reqres.in/api/users/1 adresine istek atsın ve başarılı bir istek sonucunda gelen data'daki url'i avatar state'ine eklesin.

- İpucu: gelen reponse'daki data'yı konsola yazdırıp ne geldiğine bakabilirsin.

{ data: { id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth",
avatar: "https://reqres.in/img/faces/1-image.jpg" }, 
support: { url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral", 
text: "Tired of writing endless social media content? Let Content Caddy generate it for you." } }
*/


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
