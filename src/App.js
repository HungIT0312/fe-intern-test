import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="background">
      <SideBar />
      <div className="container">
        <section className="content">
          <Content />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
