import React from "react";
import SimpleForm from "./Components/Form";
import Title from "./Components/Title";

import "./App.scss";

const App = () => {
    return (
        <div className="wrapper">
            <Title title={"Github user search"} />
            <SimpleForm />
        </div>
    );
};

export default App;
