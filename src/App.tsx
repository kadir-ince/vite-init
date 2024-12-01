import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ConfigProvider, theme as antTheme, Button } from "antd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import { useThemeContext } from "./context/ThemeContext";

const AppContent = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#1890ff",
        },
      }}
    >
      <Router>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: theme === "dark" ? "#141414" : "#ffffff",
            color: theme === "dark" ? "#ffffff" : "#000000",
          }}
        >
          <nav
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme === "dark" ? "#1f1f1f" : "#f0f0f0",
            }}
          >
            <ul
              style={{
                display: "flex",
                gap: "1rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
                >
                  Giriş
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <Button onClick={toggleTheme} icon={theme === "dark" ? "🌞" : "🌙"}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </nav>

          <main style={{ padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ConfigProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
