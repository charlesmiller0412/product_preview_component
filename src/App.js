import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <main>
                <Card />
            </main>
            <Footer />
        </div>
    );
}

export default App;
