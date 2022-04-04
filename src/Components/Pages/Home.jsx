import React from "react";
import "./Home.css";
import Editor from "../Layouts/Editor";
import Preview from "../Layouts/Preview";

function Home() {
    return (
        <div className="ui main">
            <h2 className="heading">Home</h2>
            <div className="builder">
                <Editor />
                <Preview />
            </div>
        </div>
    );
}

export default Home;
