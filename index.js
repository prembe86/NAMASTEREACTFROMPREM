import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading", className: "header" },



//     "This is my first reach heading ");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", { id: "parent" }, [

//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", { id: "heading1", className: "header" },



//             "This is my first reach heading "),
//         React.createElement("h1", { id: "heading2", className: "header" },



//             "This is my first reach heading ")


//     ]),
//         React.createElement("div", { id: "child2" }, [
//             React.createElement("h1", { id: "heading1", className: "header" },



//                 "This is my first reach heading "),
//             React.createElement("h1", { id: "heading2", className: "header" },



//                 "This is my first reach heading "),



//         ])


// ]);
// root.render(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
const Head = () => {return <h1 id="heading" className="header" tabIndex="4">JSX heading</h1>};
const Head4 = () => (<h1 id="heading" className="header" tabIndex="4">JSX heading4</h1>);
const Head3 = () => <h1 id="heading2" className="header" tabIndex="4">JSX heading3</h1>
    const Head2 = () => {

       return (<h1 id="heading2" className="header" tabIndex="4">
    
    JSX heading2</h1>)
    
};


const heading = (<h1
>heading<Head4/></h1>
)
    const Container = () =>
        (<div id="container">
            <Head/>
            <Head2/>
            <Head3/>
            <Head4/>
            <Head4> </Head4>
            {Head4()}
            {heading}
        </div>)
    
root.render(<Container/>);