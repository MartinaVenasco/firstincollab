import styles from "./app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
