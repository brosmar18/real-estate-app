import SearchBar from "../../components/SearchBar/SearchBar";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">The Right Place to Find Best Properties</h1>
      <p className="desc">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
