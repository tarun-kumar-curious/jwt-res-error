import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home-Page";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Signin from "./Components/core/Signin";
import Signup from "./Components/core/Signup";
import Footer from "./Components/Common/Footer";

function App() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        let progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScroll(scroll);
        };

        window.addEventListener("scroll", progressBarHandler);
        return () => window.removeEventListener("scroll", progressBarHandler);
    });
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <div id="progressBarContainer">
                <div
                    id="progressBar"
                    style={{
                        transform: `scale(${scroll}, 1)`,
                        opacity: `${scroll}`,
                        background: `linear-gradient(50deg, blue 0%, blue ${scroll * 100}%, transparent ${
                            scroll * 100
                        }%, transparent 100%)`,
                    }}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
