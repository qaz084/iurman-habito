import { React, useState, useEffect } from "react";

//Boton que aparece luego de scrollear, para ir al top de la página
//-------------------------------------------------------------
export const ScrollToTopButton = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 350
      ) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={handleScrollToTop}
        className={scrollToTop ? "group btn-to-top" : "btn-to-top-out"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white stroke-2 duration-300 ease-in group-hover:scale-125"
        >
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
