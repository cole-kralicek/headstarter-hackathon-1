import React from "react";

import Header from "../components/Header";
import Discovery from "../components/Discovery";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <div className="wrapper">
                <Discovery />
                <Header />
            </div>

            <Footer />
        </div>
    )
}

export default Home;
