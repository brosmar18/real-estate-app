import NavBar from "./components/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import "./layout.scss";

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Hero />
      </div>
    </div>
  );
};

export default App;
