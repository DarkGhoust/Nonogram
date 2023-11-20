import Level from "./components/levels/Level"
import Home from "./components/Home"
import Start from "./components/Start"
import Fail from "./components/Fail"
import { HashRouter, Routes, Route } from "react-router-dom"
import "./css/game.css"

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/level/:id" element={<Level />} >
                        <Route path="/level/:id/fail" element={<Fail />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
