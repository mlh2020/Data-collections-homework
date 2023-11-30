//Feeling Loopy Original Code
let newString1 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let rows1 = newString1.split("\n");

for (let i = 0; i < rows1.length; i++){
    let cells = rows1[i].split(",");
    console.log(cells[0], cells[1], cells[2], cells[3]);
}

//Part 1: Refactoring
let newString2 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows2 = newString2.split("\n");
let headers1 = rows2[0].split(",");
let data1 = [];

for (let i = 1; i < rows2.length; i++) {
    let cells = rows2[i].split(",");
    let rowData1 = {};

    for (let j = 0; j < headers1.length; j++) {
        rowData1[headers1[j]] = cells[j];
}

    data1.push(rowData1);
}
console.log(data1);

//Part 2: Expanding Functionality
let newString3 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows3 = newString3.split("\n");

// Calculate the number of columns dynamically based on the first row
let headers2 = rows3[0].split(",");
let numColumns1 = headers2.length;

let data2 = [];

for (let i = 0; i < rows3.length; i++) {
    let cells = rows3[i].split(",");
    let rowData2 = [];

    for (let j = 0; j < numColumns1; j++) {
        rowData2.push(cells[j]);
}

    data2.push(rowData2);
}
console.log(data2);

//Part 3: Transforming Data
let newString4 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows4 = newString4.split("\n");

// Calculate the number of columns dynamically based on the first row
let headers3 = rows4[0].split(",");
let numColumns2 = headers3.length;

let data3 = [];

for (let i = 1; i < rows4.length; i++) {
    let cells = rows4[i].split(",");
    let rowData3 = {};

    for (let j = 0; j < numColumns2; j++) {
        // Convert keys to lowercase for consistency
        let key = headers3[j].toLowerCase();
        rowData3[key] = cells[j];
    }

    data3.push(rowData3);
}

console.log(data3);

//Part 4: Sorting and Manipulating data
let newString5 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows5 = newString5.split("\n");

// Calculate the number of columns dynamically based on the first row
let headers4 = rows5[0].split(",");
let numColumns = headers4.length;

let data4 = [];

for (let i = 1; i < rows5.length; i++) {
    let cells = rows5[i].split(",");
    let rowData4 = {};

    for (let j = 0; j < numColumns; j++) {
        // Convert keys to lowercase for consistency
        let key = headers4[j].toLowerCase();
        rowData4[key] = cells[j];
    }

    data4.push(rowData4);
}

// Remove the last element from the array
data4.pop();

// Insert a new object at index 1
data4.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end of the array
data4.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(data4);

// Calculate the average age using a loop
let totalAge = 0;

for (let i = 0; i < data4.length; i++) {
    totalAge += parseInt(data4[i].age);
}

let averageAge = totalAge / data4.length;

console.log("Average Age:", averageAge);

//Part 5: Full Circle
let finalCSV = data4.reduce((csvString, obj, index) => {
    // Extract values from the object and join them with commas
    let values = Object.values(obj).join(",");
    
    // Add a new line character after each row except the last one
    let row = index === data4.length - 1 ? values : values + "\n";

    // Concatenate the current row to the CSV string
    return csvString + row;
}, "");

console.log(finalCSV);
