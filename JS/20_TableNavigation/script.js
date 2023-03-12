// accesing the table
const t = document.body.firstElementChild.firstElementChild

// accessing the table caption
console.log(t.caption)

// accessin the table rows
console.log(t.rows)

// accessing the table head 
console.log(t.tHead)

// accessing the table head 1st table row table data text
console.log(t.tHead.firstElementChild.firstElementChild.innerText)

// accessing the table foot
console.log(t.tFoot)

// accessing the table bodies
console.log(t.tBodies)

// accessing the table bodies row
console.log(t.tBodies[0].rows)

// accessing the table rows cells
console.log(t.tBodies[0].rows[0].cells)

// accessing the table rowindex
console.log(t.tBodies[0].rows[0].rowIndex)

// accessing the table section row Index
console.log(t.tBodies[0].rows[2].sectionRowIndex)

// accessing the table data cellindex
console.log(t.tBodies[0].rows[1].children[2].cellIndex)