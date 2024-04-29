import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    console.log(key);
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      console.log(key);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
