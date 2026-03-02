// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const links = [
//   { label: "Home", to: "/" },
//   { label: "Projects", to: "/projects" },
//   { label: "Gallery", to: "/gallery" },
//   { label: "Skills", to: "/skills" },
//   { label: "Certificates", to: "/certificates" },
//   { label: "Blog", to: "/blog" },
//   { label: "Resume", to: "/resume" },
//   { label: "About Me", to: "/about" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const navRef = useRef(null);
//   const linksRef = useRef(null);

//   // Check if links overflow nav width (to show hamburger)
//   const checkOverflow = () => {
//     if (!navRef.current || !linksRef.current) return;
//     setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
//   };

//   useEffect(() => {
//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);
//     return () => window.removeEventListener("resize", checkOverflow);
//   }, []);

//   return (
//     <>
//       {/* --- Navbar --- */}
//       <nav
//         ref={navRef}
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 100,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "1rem 2rem",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//           background: "rgba(0,0,0,0.6)",
//           backdropFilter: "blur(10px)",
//           fontFamily: "inherit",
//         }}
//       >
//         {/* Logo */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//           <motion.div
//             className="logo"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             style={{
//               fontWeight: "bold",
//               fontSize: "1.4rem",
//               color: "var(--accent)",
//             }}
//           >
//             SP
//           </motion.div>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <h1 style={{ margin: 0, fontSize: 14 }}>Shanmukha Penta</h1>
//             <div style={{ fontSize: 12, color: "var(--muted)" }}>
//               Full Stack Developer
//             </div>
//           </div>
//         </div>

//         {/* Desktop links */}
//         <div
//           ref={linksRef}
//           style={{
//             display: showButton ? "none" : "flex",
//             justifyContent: "center",
//             gap: "2rem",
//             alignItems: "center",
//             flexGrow: 1,
//           }}
//         >
//           {links.map((l) => (
//             <NavLink
//               key={l.to}
//               to={l.to}
//               end
//               style={{
//                 position: "relative",
//                 fontSize: "0.95rem",
//                 textDecoration: "none",
//                 color: "white",
//                 fontWeight: 500,
//               }}
//             >
//               {({ isActive }) => (
//                 <motion.div
//                   whileHover={{
//                     scale: 1.1,
//                     color: "var(--accent)",
//                     textShadow: "0 0 8px var(--accent)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <motion.span
//                     animate={{ color: isActive ? "var(--accent)" : "white" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {l.label}
//                   </motion.span>
//                   {isActive && (
//                     <motion.div
//                       layoutId="underline"
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       style={{
//                         width: "70%",
//                         height: "2px",
//                         marginTop: "4px",
//                         borderRadius: "1px",
//                         backgroundColor: "var(--accent)",
//                         boxShadow: "0 0 6px var(--accent)",
//                       }}
//                     />
//                   )}
//                 </motion.div>
//               )}
//             </NavLink>
//           ))}
//         </div>

//         {/* Hamburger */}
//         {showButton && (
//           <div className="mobile-btn">
//             <button
//               style={{
//                 background: "none",
//                 border: "none",
//                 color: "#fff",
//                 fontSize: "1.8rem",
//                 cursor: "pointer",
//                 zIndex: 10000,
//               }}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? "✕" : "☰"}
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* --- Mobile Dropdown Menu --- */}
//       <AnimatePresence>
//         {isOpen && showButton && (
//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -15 }}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100vh",
//               background: "rgba(0,0,0,0.95)",
//               backdropFilter: "blur(12px)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               paddingTop: "4rem",
//               overflowY: "auto",
//               zIndex: 9999,
//             }}
//           >
//             <button
//               style={{
//                 position: "absolute",
//                 top: "1rem",
//                 right: "1rem",
//                 fontSize: "2rem",
//                 color: "#fff",
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(false)}
//             >
//               ✕
//             </button>

//             {links.map((l) => (
//               <NavLink
//                 key={l.to}
//                 to={l.to}
//                 onClick={() => setIsOpen(false)}
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   padding: "1rem 0",
//                   width: "100%",
//                   textAlign: "center",
//                   fontSize: 16,
//                   borderBottom: "1px solid rgba(255,255,255,0.05)",
//                 }}
//               >
//                 {l.label}
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/p_logo.png";

/* ================= NAV LINKS ================= */

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  /* ================= CHECK OVERFLOW ================= */

  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* ================= LOGO ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            cursor: "pointer",
          }}
        >
          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            whileHover={{ scale: 1.08 }}
            style={{
              width: 46,
              height: 46,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, rgba(0,255,213,0.18), rgba(0,255,213,0.05))",
              border: "1px solid rgba(0,255,213,0.35)",
              boxShadow: "0 0 18px rgba(0,255,213,0.25)",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="Naresh Sanjeev Logo"
              style={{
                width: 26,
                height: 26,
                objectFit: "contain",
              }}
            />
          </motion.div>

          {/* TEXT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.15,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.4px",
              }}
            >
              Naresh Sanjeev
            </h1>

            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
                letterSpacing: "0.3px",
              }}
            >
              MERN Stack Developer
            </span>
          </div>
        </div>

        {/* ================= DESKTOP LINKS ================= */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    color: "var(--accent)",
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: isActive ? "var(--accent)" : "white",
                    }}
                  >
                    {l.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        background: "var(--accent)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* ================= HAMBURGER ================= */}
        {showButton && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              zIndex: 9999,
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  padding: "1rem 0",
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
