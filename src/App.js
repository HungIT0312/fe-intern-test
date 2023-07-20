import "./App.scss";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="background">
      <SideBar />
      <div className="container">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
