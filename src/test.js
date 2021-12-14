const list = [
    { name: "finir Trendy Bags", done: true },
    { name: "faire ToDo list", done: false },
    { name: "false", done: false },
];
let pattern = "ag";

console.log("1" + list[0].name.toLowerCase().includes(pattern));

// list.filter((z) => {
//     return z.name.includes(pattern);
// }).map();
// console.log("2" + list);