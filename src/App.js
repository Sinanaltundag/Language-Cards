import "./App.css";
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import Card from "./components/cards/card";
import { categories } from "./helper/data";


function App() {


  return (
    <div className="App">
      <ReactIcon className="appIcon" />
      <div className="card-container">
        <h2>Languages</h2>
        {categories.map((item, index) => {
          return <Card categories={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
