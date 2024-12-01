import HomeComponent from "../components/HomeComponent";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <p>Tema: {theme}</p>
      <HomeComponent />
    </div>
  );
};

export default Home;
