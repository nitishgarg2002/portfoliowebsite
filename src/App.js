import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import NavBar from "./Navbar";
import MiddleSection from "./middleSection";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
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
