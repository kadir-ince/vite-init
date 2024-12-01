import { Button } from "antd";
import HomeComponent from "../components/HomeComponent";
import { useThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <p>Tema: {theme}</p>
      <Button type="primary" onClick={toggleTheme}>
        Tema Değiştir
      </Button>
      <div style={{ marginTop: "2rem" }}>
        <HomeComponent />
      </div>
    </div>
  );
};

export default Home;
