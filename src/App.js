npm import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat">
      <div
        className="min-h-screen bg-black/20"
        style={{
          background:
            "linear-gradient(249deg, #CFCFCF 0%, #EFEFEF 49.4%, #CFCFCF 98.81%)",
        }}
      >
        <Navbar />
        <main className="max-w-[1920px] mx-auto">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
