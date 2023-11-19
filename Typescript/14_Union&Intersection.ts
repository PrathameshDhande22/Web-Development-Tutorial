// ? Union and Intersection

// Union Type
// # Declaring the Types
type Person = {
    name: string,
    id: number
}

type Employee = {
    dept: string,
    deptid: number
}

// Here these type can contain the person type or employee type or both type
type HomePerson = Person | Employee

const ho1: HomePerson = {
    dept: "dfd",
    deptid: 12,
}
console.log(ho1)

const value: string | number | undefined = undefined

// Intersection Type

// Here these type requires both person and employee type
type EmployeeDetails = Person & Employee

const emp1: EmployeeDetails = {
    dept: "IT",
    deptid: 123,
    id: 34,
    name: "Prathamesh"
}
console.log(emp1)