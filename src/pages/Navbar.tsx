import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/showcase", label: "Showcase" },
  { to: "/contact", label: "Let's talk" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header relative">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">ARG</p>
      </NavLink>

      <nav className="hidden md:flex text-lg gap-7 font-medium">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden relative z-20 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-white shadow-md"
      >
        <span
          className={`block h-[2px] w-5 bg-black transition-transform ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-black transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-black transition-transform ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="md:hidden fixed inset-0 top-[72px] z-10 bg-white/95 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col items-center gap-6 py-10 text-xl font-medium">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
