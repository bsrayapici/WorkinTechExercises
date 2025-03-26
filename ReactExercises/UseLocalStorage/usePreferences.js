import {useLocalStorage} from './useLocalStorage.js'

export const usePreference = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  
  const updatePreference = (newValue) => {
    setValue(newValue);
  };
  
  return [value, updatePreference];
};
