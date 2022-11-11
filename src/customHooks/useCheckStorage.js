import { useEffect, useState } from "react";

export const useCheckStorage = (key) => {
  const [storageState, setStorageState] = useState(false);

  window.localStorage.getItem(key);

  useEffect(() => {
    const check = () => {
      const jsonValue = window.localStorage.getItem(key);
      jsonValue ? setStorageState(true) : setStorageState(false);
     
    };
    check();
  }, [storageState, setStorageState, key]);

  return storageState;
};
