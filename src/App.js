import { Header } from "./Components/Header"
import { NaveBar } from "./Components/Nav/NaveBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from "./Components/router";
import { MainLayout } from "./Components/Layount/MainLayount";




function App() {
  return (
    <div className="App">
      <Header />
      <NaveBar/>
      <MainLayout>
      <Router />
      </MainLayout>
      </div>
  
  );
}

export default App;
