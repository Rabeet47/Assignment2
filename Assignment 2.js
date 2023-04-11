//                 Q#1
// function hello(num) {
//     return function (num) {
//         console.log(num + num);
//     }
// }
// let val = hello(22);
// val(22);               
//                 Q#2
// let arr = ["Rabeet", "Ali", "Murtuza", "Fahad", "Kaleem"];
// function search(arr, val) {

//     if (arr.length === 0) {
//         return false;
//     }
//     else if (arr[0] === val) {
//         return true;
//     }
//     return search(arr.slice(1), val);
// }
// console.log(search(arr, "Ali"));
//                Q#3
// function addParagraph(text) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = text;
//     document.body.appendChild(paragraph);
// }
// addParagraph("Hello! World");
//                Q#4
// function addListItem(text) {
//     let list = document.querySelector("ul");
//     let listItem = document.createElement("li");
//     listItem.textContent = text;
//     list.appendChild(listItem);
// }
// addListItem("Book 4");
// addListItem("Book 5");
//                Q#5
// function changeBackColor(element, color) {
//     element.style.backgroundColor = color;
// }
// let myElement = document.querySelector("#my-para");
// changeBackColor(myElement, "yellow");
//               Q#6
// function set(name, object) {
//     let objectString = JSON.stringify(object);
//     localStorage.setItem(name, objectString);
//   }

//   let obj = {
//         name: "Ali",
//         fName: "Salam",
//         age: 20
//     }
// set("myobj", obj);
//               Q#7
// function get(name) {
//     let objectString = localStorage.getItem(name);
//     return JSON.parse(objectString);
// }
// let myObject = get("myobj");
// console.log(myObject);
//               Q#8
// let obj = {
//     name: "Ali",
//     fName: "Salam",
//     age: 20
// }
// function saveObjectProperties(object) {

//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//             const value = object[key];
//             localStorage.setItem(key, JSON.stringify(value));
//         }
//     }
//     let retrievedObject = {};
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             let value = JSON.parse(localStorage.getItem(key));
//             retrievedObject[key] = value;
//         }
//     }
//     return retrievedObject;
// }

// let retrievedObject = saveObjectProperties(obj);
// console.log(retrievedObject);