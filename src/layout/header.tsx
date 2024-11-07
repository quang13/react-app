import { FaCaretDown, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Header() {
  const route = useLocation();
  return (
    <header
      className="header"
      style={{
        width: "100%",
        height: "80px",
        padding: "8px 20px",
        color: "#fff",
        backgroundColor: "#333",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 36,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        onClick={() => window.open("/", "_self")}
        className="home-text"
      >
        LOGO
      </span>
      <div className="list-menu" style={{ marginLeft: "40px", color: "#fff" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/">Server Leasing</a>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <a href="/">About Us</a>
            <FaCaretDown size={12} />
          </li>
          <li>
            <a href="/profile">Contact Us</a>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <a href="/">Admin</a>
            <FaCaretDown size={12} />
          </li>
        </ul>
      </div>
      <div
        className="user-menu"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginLeft: "auto",
          paddingRight: "48px",
          cursor: "pointer",
        }}
        onClick={() => window.open("/profile", "_self")}
      >
        <p className="" style={{}}>
          <FaUser size={16} />
          <span style={{ marginLeft: "8px" }}>User</span>
        </p>
        <FaCaretDown size={12} />
      </div>
    </header>
  );
}
