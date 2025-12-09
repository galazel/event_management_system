import { useState, useEffect } from "react";

const useCarousel = (items) => {
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(items[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (index + 1) % items.length;
      setIndex(nextIndex);
      setItem(items[nextIndex]);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, items]);

  return item;
};

export default useCarousel;
