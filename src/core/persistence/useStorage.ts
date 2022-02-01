import { useState, useEffect } from "react";

const getStorageValue = (key: string, defaultValue: undefined | []) => {
  // Getting stored value
  const saved = localStorage.getItem(key);

  if (saved == null) {
    return defaultValue;
  }

  return JSON.parse(saved);
};

const useStorage = (key: string, defaultValue: undefined | []) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
