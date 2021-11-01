import NavBar from "./components/NavBar";
import ContentSection from "./components/ContentSection";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}
      <div className="row no-gutters">
        <div className="col-6">
          <NavBar />
          <ContentSection />
        </div>
        <div className="col-6">
          <ImageSection />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
