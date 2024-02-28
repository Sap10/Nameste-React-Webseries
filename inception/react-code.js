//h1 is besically a react component, if we console log it then then we can see it is nothing but an object.
const h1 = React.createElement("h1", {id:"heading"}, "Hello world!, from React.js");

console.log(h1);

/***
 * If we wanty to achive the following HTML structure, then we need to do it in the following ways,
 * 
 *          <div id="parent">
 *              <div id="child">
 *                  <h1></h1>
 *              </div>
 *          </div>
 */

const elemnt = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Hello world from React.js")));

/**
 *  If we have multiple child then we need to wrap it within an array.
 * 
 * Suppose we need to create the following DOM structure, then we will create it by the following way,
 * 
 *          <div id="parent">
 *              <div id="child1">
 *                  <h1>h1 from child1</h1>
 *                  <h1>h2 from child1</h1>
 *              </div>
 *              <div id="child2">
 *                  <h1>h1 from child2</h1>
 *                  <h1>h2 from child2</h1>
 *              </div>
 *          </div>
 * 
 */


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elemnt);