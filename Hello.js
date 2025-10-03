/**
 * Copies the node value of the first child of the element with id "demo"
 * to the innerHTML of elements with ids "result" and "result1".
 *
 * Assumes that the element with id "demo" exists and has at least one child node.
 */
function myFunction() {
    document.getElementById("result").innerHTML =
        document.getElementById("demo").firstChild.nodeValue;
    document.getElementById("result1").innerHTML =
        document.getElementById("demo").childNodes[0].nodeValue;
}
