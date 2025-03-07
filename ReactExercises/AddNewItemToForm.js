import  { useState } from "react";

export default function App() {
  const [languages, setLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((lang) => lang !== value));
    }
  };

  return (
    <div>
      <h3>Hangi dilleri biliyorsun?</h3>
      <form>
        <label>
          <input
            type="checkbox"
            name="lang"
            value="Türkçe"
            onChange={handleLanguageChange}
          />
          <span>Türkçe</span>
          <label>
          <input
            type="checkbox"
            name="lang"
            value="Almanca"
            onChange={handleLanguageChange}
          />
          <span>Türkçe</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="lang"
            value="İngilizce"
            onChange={handleLanguageChange}
          />
          <span>İngilizce</span>
        </label>
      </form>
    </div>
  );
}
