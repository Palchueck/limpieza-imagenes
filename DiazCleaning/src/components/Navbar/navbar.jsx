import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Cambiar el color de fondo del navbar al hacer scroll
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    // Función para determinar qué sección está en la vista
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajusta este offset según sea necesario

      // Obtener todas las secciones y sus posiciones
      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "services", element: document.getElementById("services") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "about", element: document.getElementById("about") },
        { id: "contact", element: document.getElementById("contact") },
      ].filter((section) => section.element !== null); // Filtrar secciones que existen

      // Ordenar las secciones por su posición en la página
      const sectionPositions = sections.map((section) => ({
        id: section.id,
        offsetTop: section.element.offsetTop,
        offsetBottom: section.element.offsetTop + section.element.offsetHeight,
      }));

      // Encontrar la sección activa actual
      for (let i = 0; i < sectionPositions.length; i++) {
        const { id, offsetTop, offsetBottom } = sectionPositions[i];

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Llamar a handleScroll inmediatamente para establecer la sección inicial
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", changeNav);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className={scrollNav ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div>
          <Link
            to="hero"
            className="navbar-logo"
            onClick={closeMobileMenu}
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Diaz Cleaning LLC
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              className={`nav-links ${
                activeSection === "hero" ? "active" : ""
              }`}
              onClick={() => {
                closeMobileMenu();
                setActiveSection("hero");
              }}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services"
              className={`nav-links ${
                activeSection === "services" ? "active" : ""
              }`}
              onClick={() => {
                closeMobileMenu();
                setActiveSection("services");
              }}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              className={`nav-links ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => {
                closeMobileMenu();
                setActiveSection("about");
              }}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              className={`nav-links ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={() => {
                closeMobileMenu();
                setActiveSection("projects");
              }}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className={`nav-links ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => {
                closeMobileMenu();
                setActiveSection("contact");
              }}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div>
          Españo/ingles
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;