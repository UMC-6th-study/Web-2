import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Popular from "./pages/PopularPage";
import NowPlay from "./pages/NowPlayingPage";
import TopRated from "./pages/TopRatedPage";
import NotFound from "./pages/NotFound"
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetailPage";
import UpComing from "./pages/UpComingPage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}  />
          <Route path="/popular" element={<Popular />}  />
          <Route path="/movie/:title" element={<MovieDetail />} />

          <Route path="/nowplay" element={<NowPlay />}  />
          <Route path="/toprated" element={<TopRated />}  />
          <Route path="/upcoming" element={<UpComing />} />

          <Route path="/*" element={<NotFound />}  />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
