import styles from "./app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
