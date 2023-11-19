// ? String Literal Types

// Selecting from the set of available string

let airplane: "onair" | "landed" | "crashed" = "landed";
// in these variable you cannot add the number as you can select from these string only.

/* 
$ lets implements it inthe type
*/
type Airplane = "onair" | "landed" | "crashed"
const select = (status: Airplane): void => {
    console.log("Your plane status is ", status)
}

select("landed")
select("crashed")
