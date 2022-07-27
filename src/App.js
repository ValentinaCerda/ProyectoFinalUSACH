import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { Lyric } from "./components/Lyric"
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <Lyric />
      <Footer />
    </div>
  );
}

export default App;