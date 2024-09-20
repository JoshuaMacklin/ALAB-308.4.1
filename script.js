// Part 1: Feeling Loopy  Refactor============================================================

// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26

// As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

// String Version
/* {
  n = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
  // nsplit = n.split(/\r?\n/)
  let cell1 = ''
  let cell2 = ''
  let cell3 = ''
  let cell4 = ''
  let cells = []

  currentCell = 1

  numSinceLastCell = 0

  // console.log(nsplit)

  // console.log(n.slice(0,2))

  // for(let i=0; i <= n.length; i++) {
  //   debugger
  //   if ((n[i]+n[i+1]) != "\n") {
  //     if (n[i] == `,`){
  //       debugger
  //       console.log(n.slice(numSinceLastCell,i))
  //       // cells.push(n.slice(n,i))
  //       numSinceLastCell = i + 1
  //     } else {
  //       debugger
  //       console.log(`${n[i]} : ${numSinceLastCell}`);
  //       // numSinceLastCell++;
  //     }
  //   } else {
  //     console.log("new row")
  //   }
  // }
  // console.log();

  for(let i=0; i <= n.length; i++) {

    if(n[i] == ","){
      currentCell++;
      continue;
    } 

    if(n[i] === `\n`){
      cell1 = ''
      cell2 = ''
      cell3 = ''
      cell4 = ''
      currentCell = 1
    }

    switch (currentCell){
      case 1:
        cell1 += n[i]
        break;
      case 2:
        cell2 += n[i]
        break
      case 3:
        cell3 += n[i]
        break
      case 4:
        cell4 += n[i]
        break
      default:
        cell1
    }

    if ((currentCell === 4 && n[i + 1] === '\n') || i + 1 === n.length) {
      console.log(cell1, cell2, cell3, cell4);
    }
  }
} */

// Array Version Refactor
// {
//   n = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
//   let cells = []

//   currentCell = 0

//   numSinceLastCell = 0

//   for(let i=0; i <= n.length; i++) {
//     debugger
//     if(n[i] == ","){
//       currentCell++;
//       continue;
//     } 

//     if(n[i] === `\n`){
//       // Reset the array
//       cells = []
//       currentCell = 0
//       continue
//     }

//     if (cells[currentCell]) {
//       cells[currentCell] += n[i]
//     } else {
//       cells[currentCell] = n[i]
//     }

//     if ((currentCell === 3 && n[i + 1] === '\n') || i + 1 === n.length) {
//       console.log(cells.toString());
//     }
//   }
// }

// Part 2: Expanding Functions

// Array Version Refactor
// {
//   n = "ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,false\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor’s Assistant,26.true"
//   let cells = []
//   let table = []
//   currentCell = 0
//   columns = 0
//   currentRow = 0

//   for(let i=0; i <= n.length; i++) {
//     debugger
//     // Checking for new cell
//     if(n[i] == ","){
//       if(currentRow === 0){
//         columns++
//       }

//       currentCell++;
//       continue;
//     } 

//     // Checking for new row
//     if(n[i] === `\n`){
//       // Reset the array
//       cells = []
//       currentCell = 0
//       continue
//     }
//     // Part 1 code
//     // if (cells[currentCell]) {
//     //   cells[currentCell] += n[i]
//     // } else {
//     //   cells[currentCell] = n[i]
//     // }

//     // Part2
//     if (table[currentRow] === undefined) {
//       table[currentRow] = []
//     }

//     if (table[currentRow][currentCell]) {
//       table[currentRow][currentCell] += n[i]
//     } else {
//       table[currentRow][currentCell] = n[i]
//     }

//     if ((currentCell === columns && n[i + 1] === '\n') || i + 1 === n.length) {
//       console.log(cells.toString());
//     }
//   }
//   console.log(table)
// }

//Miller Version
// const csvString =
//   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26';

const csvString =
  `ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true`;
// Instead of having four different variables, create an array!
//part 1
let cells = [];
let currentCell = 0;

//part 2a
let columns = 0;
let currentRow = 0;

//part 2
let table = [];

//Ex: helper function
function resetVars() {
  cells = [];
  currentCell = 0;
}

for (let i = 0; i < csvString.length; i++) {
  //checking for new cell
  if (csvString[i] === ',') {
    // Part 2a
    if (currentRow === 0) {
      columns++;
    }

    currentCell++;
    continue;
  }
  // checking for a new row
  if (csvString[i] === '\n') {
    resetVars();
    currentRow++;
    continue;
  }

  // Part 1 code
  if (cells[currentCell]) {
    cells[currentCell] += csvString[i];
  } else {
    cells[currentCell] = csvString[i];
  }

  //Part 2
  if (table[currentRow] === undefined) {
    table[currentRow] = [];
  }

  if (table[currentRow][currentCell]) {
    table[currentRow][currentCell] += csvString[i];
  } else {
    table[currentRow][currentCell] = csvString[i];
  }

  // Part 1
  // if (
  //   (currentCell === columns && csvString[i + 1] === '\n') ||
  //   i + 1 === csvString.length
  // ) {
  //   // console.log(cell1, cell2, cell3, cell4);
  //   console.log(cells.toString());
  // }
}

console.log(table);


// Vega Version
// const rows = csvString.split('\n').map(row => row.trim()).filter(row => row);
// console.log(rows);

// for (;;)  { 
//   console.log("hi");
// }

// Part 3: Transforming Data

let objTable = table

// console.log(objTable[0]);

for (let i=1; i<objTable.length; i++) {
  console.log(objTable[i]);
}