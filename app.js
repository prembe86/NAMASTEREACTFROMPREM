import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", { id: "heading", className: "header" },



    "This is my first reach heading ");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [

    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1", className: "header" },



            "This is my first reach heading "),
        React.createElement("h1", { id: "heading2", className: "header" },



            "This is my first reach heading ")


    ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", { id: "heading1", className: "header" },



                "This is my first reach heading "),
            React.createElement("h1", { id: "heading2", className: "header" },



                "This is my first reach heading "),



        ])


]);
root.render(parent);