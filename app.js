const heading = React.createElement("h1", { id: "heading", class: "header" },



    "This is my first reach heading ");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [

    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1", class: "header" },



            "This is my first reach heading "),
        React.createElement("h1", { id: "heading2", class: "header" },



            "This is my first reach heading ")


    ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", { id: "heading1", class: "header" },



                "This is my first reach heading "),
            React.createElement("h1", { id: "heading2", class: "header" },



                "This is my first reach heading "),



        ])


]);
root.render(parent);