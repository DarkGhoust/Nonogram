import Level from "./components/levels/Level"
import Home from "./components/Home"
import Start from "./components/Start"
import Fail from "./components/Fail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/game.css"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/level/:id" element={<Level />} >
                        <Route path="/level/:id/fail" element={<Fail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
