import { useEffect, useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  });

  return (
    <>
      <header>
        <div className="logo">
          <h2>NoteMate</h2>
        </div>
        <div className="themeSelector">
          <span
            onClick={() => setTheme("medium")}
            className={theme === "medium" ? "medium activeTheme" : "medium"}
          ></span>
          <span
            onClick={() => setTheme("light")}
            className={theme === "light" ? "light activeTheme" : "light"}
          ></span>
          <span
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "dark activeTheme" : "dark"}
          ></span>
          <span
            onClick={() => setTheme("gone")}
            className={theme === "gOne" ? "gone activeTheme" : "gone"}
          ></span>
          <span
            onClick={() => setTheme("gTwo")}
            className={theme === "gTwo" ? "gtwo activeTheme" : "gTwo"}
          ></span>
          <span
            onClick={() => setTheme("gThree")}
            className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
          ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
