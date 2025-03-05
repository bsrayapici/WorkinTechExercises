Bir Web uygulaması için  login formu oluştur.

1- Formu oluştur.
- Login.js sayfasında 2 input alanı olsun. email ve password
- Inputların üstüne Label ekle. Email: ve Şifre: yazsın.
- button olsun. İçinde Giriş yazsın.

2- Formu state ile yönet.
- email ve password isimli 2 state oluştur.
- handleSubmit, handleEmailChange, handlePasswordChange fonksiyonları yaz ve ilgili element'lere doğru event ile bağla.
- handleSubmit event objesini alsın, sayfanın yenilenmesini engellesin, state verisini backtick kullanarak console'a yazdırsın(Email: emre@wit.com.tr, Password: 1234), formu sıfırlasın ve sayfayı /page adresine yönlendirsin.
- handleEmailChange ve handlePasswordChange event'i alsın ve bu event'i tetikleyen elemanın değerini state'e yazsın.

- Dikkat: input type'ları ilgili veri tipine göre yap.
- import'ları eklemeyi unutma.

login.js
Sprint 7 - Ders 2: Birlikte Kodluyoruz Antrenmanı
Büşra Yapıcı

Zorluk:
Tamamlanmış
27/27
lk seferde yaptın!
8.7
B
Bir Web uygulaması için  login formu oluştur.

1- Formu oluştur.
- Login.js sayfasında 2 input alanı olsun. email ve password
- Inputların üstüne Label ekle. Email: ve Şifre: yazsın.
- button olsun. İçinde Giriş yazsın.

2- Formu state ile yönet.
- email ve password isimli 2 state oluştur.
- handleSubmit, handleEmailChange, handlePasswordChange fonksiyonları yaz ve ilgili element'lere doğru event ile bağla.
- handleSubmit event objesini alsın, sayfanın yenilenmesini engellesin, state verisini backtick kullanarak console'a yazdırsın(Email: emre@wit.com.tr, Password: 1234), formu sıfırlasın ve sayfayı /page adresine yönlendirsin.
- handleEmailChange ve handlePasswordChange event'i alsın ve bu event'i tetikleyen elemanın değerini state'e yazsın.

- Dikkat: input type'ları ilgili veri tipine göre yap.
- import'ları eklemeyi unutma.
#4348
import { useState } from "react";
import { useHistory } from "react-router-dom"; // Yönlendirme için gerekli

export default function Login() {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Şifre state
  const history = useHistory(); // Yönlendirme için history hook'u kullanılıyor

  function handleEmailChange(event) {
    setEmail(event.target.value); // Email input değiştiğinde state'i güncelle
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value); // Şifre input değiştiğinde state'i güncelle
  }

  function handleSubmit(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle
    console.log(`Email: ${email}, Password: ${password}`); // Console'a yazdır

    setEmail(""); // Formu sıfırla
    setPassword(""); // Şifreyi sıfırla

    history.push("/page"); // Başarılı giriş sonrası yönlendir
  }

  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email} // Controlled input olarak state'ten değer alır
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Şifre:</label>
        <input
