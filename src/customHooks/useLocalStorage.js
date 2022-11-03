import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const jsonValue = window.localStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log("Error Seteando Local Storage:", e);
    }
  };
  return [storedValue, setValue];
};
