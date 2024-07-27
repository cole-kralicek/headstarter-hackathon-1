import React from "react";

import Header from "../components/Header";
import Discovery from "../components/Discovery";

function Home() {
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <h2>Discovery</h2>
            <Discovery></Discovery>
        </div>
    )
}

export default Home;