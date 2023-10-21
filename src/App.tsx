import "./App.css";
import { Body } from "./assets/components/Body";
import { Header } from "./assets/components/Header";
import AOS from "aos";

function App() {
  AOS.init({
    duration: 1000,
  });
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
