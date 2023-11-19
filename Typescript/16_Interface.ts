// ? Interface in ts

/* 
Concept of interface is same like we use in java
And also they are similar to Type in ts only difference is Interface is mostly used in classes

Syntax => interface Name{
    key:datatype;
    key2:datatype;
    .....
}
*/

// $ Declaring the Interface
interface Company {
    name: string;
    product: string
}

// Using the interface
const comp1: Company = {
    name: "Asus",
    product: "Laptop"
}

console.log(comp1)