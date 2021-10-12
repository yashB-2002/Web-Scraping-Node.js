const data = require("./data.json");
// console.log(data);
const xlsx = require("xlsx");

// write in file
let newWb = xlsx.utils.book_new();
let newWs = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newWb, newWs, "firstSheet");
xlsx.writeFile(newWb, "xl.xlsx");



//read from file
let file = xlsx.readFile("xl.xlsx");
let excel_data = file.Sheets["firstSheet"];
let json_data = xlsx.utils.sheet_to_json(excel_data);
console.log(json_data);