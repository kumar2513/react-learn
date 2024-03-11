// const heading=React.createElement(
//     "h1",{id:"heading"},
//     "Hi folks! This is a react Page"
//     );
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

{/* <div>
    <div>
        <h1>Hi this is h1 tag</h1>
    </div>
</div> */}

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"HI I am a H1 Tag")));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)
/**
 * ReactElement(object)=>HTML(Browser Understands)
 * <div>
 *      <p>
 *          <div>
 *              <h1>This is next level</h1>
 *          </div>
 *      </p>
 * </div>
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "p",
        {id:"child"},
        React.createElement(
            "div",
            {id:"child"},
            React.createElement(
                "h1",
                {},
                "This is next level"
            ))));
            console.log(parent);
            
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);