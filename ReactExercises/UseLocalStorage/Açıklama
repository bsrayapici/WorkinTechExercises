usePreference isimli bir custon hook tanımla ve App.js'deki state'lerde kullan. - usePereference.js dosyasında named export ve arrow function olarak usePereference hook'unu yaz. - usePreference hook'u bir key ve initialValue almalı. - useLocalStorage hook'u ile value isimli bir state tanımlamalı. - İçinde updatePreference isimli bir fonksiyon olmalı. newValue parametresi ile gelen değeri state'e set etmeli. - Bu hook array tipinde value ve updatePreference'ı return etmeli. - Hook'u yazdıktan sonra App.js'deki state'leri bu hook ile değiştirmeyi unutma.

app.js
import {useState} from 'react';
export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");

  return (
     <div>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="tr">Turkish</option>
        </select>
      </label>
    </div>
  )
}

usepreferences.js

import {useLocalStorage} from './useLocalStorage.js'
export const usePreference = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const updatePreference = (newValue) => {
    setValue(newValue);
  };
  return [value, updatePreference];
};

useLocalstorage.js

{useState, useEffect} from 'react';
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
