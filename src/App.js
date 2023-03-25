import './App.css';
import './Styles/style.scss'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Popular from "./Pages/Popular/popular";
import NowPlaying from "./Pages/Now-Playing/now-playing";
import TopRated from "./Pages/TopRated/topRated";
import DetailPage from "./Pages/DetailPage/detailPage";
import {useState} from "react";
import ActorsInfo from "./Pages/Actors-Info/actors-Info";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import Search from "./Pages/Search/search";


function App() {
    const [mode, setMode] = useState(false)

    return (
        <>
            <Header setMode={setMode} mode={mode}/>
            <Routes>
                <Route path={"/"} element={<Hero/>}/>
                <Route path={"/search/:value"} element={<Search/>}/>
                <Route getDark={setMode} mode={mode} path={"/popular"} element={<Popular/>}/>
                <Route getDark={setMode} mode={mode} path={"/top-rated"} element={<TopRated/>}/>
                <Route getDark={setMode} mode={mode} path={"/movies/movies-info/:movieId"} element={<DetailPage/>}/>
                <Route getDrsk={setMode} mode={mode} path={"/now-playing"} element={<NowPlaying/>}/>
                <Route path={"/movies/actor-info/:actorId"} element={<ActorsInfo/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
