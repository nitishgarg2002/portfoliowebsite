import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Footer";
import NavBar from "./Navbar";
import MiddleSection from "./middleSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MiddleSection />
      <Footer />
    </div>
  );
}

export default App;
