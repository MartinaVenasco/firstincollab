import styles from "./app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Card from "./components/Card";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Card />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
