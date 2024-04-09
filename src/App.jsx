import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
