// import SearchBox from "./Components/Searchbox";
import MyComponent from "./MyComponent";
import Navbar from "./Components/Navbar";
import './App.css'
import Offer from "./Components/Offer";
import NameNewProject from "./Components/Name&newproject";
import Card from "./Components/Card";
import NewCard from "./Components/NewCard";
import MiddleBox from "./Components/MiddleBox";


function App() {
  return (
    <div className="mb-16">
    <Offer/>
    <Navbar/>
    <NameNewProject/>
    <MiddleBox/>
    </div>
  );
}

export default App;
