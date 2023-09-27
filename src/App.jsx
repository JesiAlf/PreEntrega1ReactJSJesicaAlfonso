import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
/*import {Home} from './components/home/Home';*/
import MaterialUI from "./components/materialUI/MaterialUI";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  let nombre = "Luna";

  return (
    <div>
      {/*NavBar*/}
      {/*home*/}
      {/*footer*/}

      <NavBar />
      <MaterialUI />
      <ItemListContainer nombre={nombre} x={true} />

      <Footer />
    </div>
  );
}

export default App;
