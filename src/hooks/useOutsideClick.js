import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const closeModalHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", closeModalHandler, listenCapturing);

    return () => {
      document.removeEventListener("click", closeModalHandler, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
