import "./App.css";
import NavBar from "./components/navBar";
import AudioPhileIcon from "./assets/images/client-audiophile.svg";
import DataBizIcon from "./assets/images/client-databiz.svg";
import MakerIcon from "./assets/images/client-maker.svg";
import MeetIcon from "./assets/images/client-meet.svg";
import ImageHeroDesktop from "./assets/images/image-hero-desktop.png";
import ImageHeroMobile from "./assets/images/image-hero-mobile.png";
function App() {
  return (
    <div className="App h-screen w-screen bg-almostWhite">
      <NavBar />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="mx-auto lg:col-start-2">
          <img src={ImageHeroMobile} alt="hero" className="lg:hidden" />
          <img
            src={ImageHeroDesktop}
            alt="hero"
            className="h-[500px] w-[400px] sm:hidden lg:inline"
          />
        </div>
        <div className="sm:px-4 sm:pt-9 lg:row-start-1 lg:ml-[100px] lg:flex lg:flex-col lg:items-start lg:justify-center">
          <h1 className="font-epilogue sm:text-center sm:text-4xl lg:text-left">
            Make remote work
          </h1>
          <p className="text-gray-400 sm:my-4 sm:text-center lg:my-8 lg:text-left lg:text-xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div class="sm:my-4 sm:text-center lg:self-start">
            <button className="rounded-lg bg-black p-4 text-lg text-white ">
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 text-center sm:my-4">
            <img src={DataBizIcon} alt="client icon" />
            <img src={AudioPhileIcon} alt="client icon" />
            <img src={MakerIcon} alt="client icon" />
            <img src={MeetIcon} alt="client icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
