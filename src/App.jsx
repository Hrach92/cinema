import Layout from "./components/layout";
import Trending from "./components/trending";
import Movie from "./components/movie";

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { movies } from "./instance/data";

function App() {
  const [id, setId] = useState("19");
  const { trendingNow } = movies;

  const movie = useMemo(() => {
    return trendingNow.find(({ Id }) => id === Id);
  }, [id, trendingNow]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionId = sessionStorage.getItem("id") || id
      setId(sessionId)
    }
  }, [id]);

  return (
    <Layout>
      <div className="App">
        <Movie movie={movie} />
        <Trending setId={setId} />
      </div>
    </Layout>
  );
}

export default App;
