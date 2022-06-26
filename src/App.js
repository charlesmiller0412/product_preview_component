import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import desktop from "./assets/images/image-product-desktop.jpg";
import mobile from "./assets/images/image-product-mobile.jpg";
import cartIcon from "./assets/images/icon-cart.svg";

function App() {
    return (
        <div className="App">
            <main>
                <div id="container" class="d-flex flex-column flex-sm-row">
                    <div id="col-left" class="col-sm-6 d-block">
                        <img
                            src={desktop}
                            alt="product"
                            id="desktop"
                            class="d-none d-sm-flex"
                        />
                        <img
                            src={mobile}
                            alt="mobile"
                            id="mobile"
                            class="d-flex d-sm-none"
                        />
                    </div>
                    <div id="col-right" class="d-block">
                        <h2>perfume</h2>
                        <h1>Gabrielle Essence Eau De Parfum</h1>
                        <p>
                            A floral, solar and voluptuous interpretation
                            composed by Olivier Polge, Perfumer-Creator for the
                            House of CHANEL.
                        </p>
                        <div id="price">
                            <div id="priceNew">$149.99</div>
                            <div id="priceOld">$169.99</div>
                        </div>
                        <div id="linkContainer">
                            <a href="#">
                                <img src={cartIcon} alt="cart logo" /> Add to
                                Cart
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://www.charlesmiller.dev">Charles Miller</a>.
            </footer>
        </div>
    );
}

export default App;
