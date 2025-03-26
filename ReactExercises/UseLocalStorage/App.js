import {usePreference} from './usePreference';

export default function App() {
  const [theme, updateTheme] = usePreference("theme", "light");
  const [language, updateLanguage] = usePreference("language", "tr");
  
  return (
     <div>
      <label>
        Theme:
        <select value={theme} onChange={(e) => updateTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Language:
        <select value={language} onChange={(e) => updateLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="tr">Turkish</option>
        </select>
      </label>
    </div>
  )
}
