import Layout from "./components/layout";
import Trending from "./components/trending";
import Movie from "./components/movie";

import './App.css'

function App() {
  return (
  <Layout>
    <div className="App">
      <Movie/>
      {/* <Trending/> */}
    </div>
  </Layout>
  );
}

export default App;
