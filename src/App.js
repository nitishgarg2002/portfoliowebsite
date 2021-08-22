import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import NavBar from "./Navbar";
import MiddleSection from "./middleSection";
import Home from "./Home";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
function App() {
  return (
    <div className="App" style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <MiddleSection />
      <Footer />
    </div>
  );
}

export default App;
