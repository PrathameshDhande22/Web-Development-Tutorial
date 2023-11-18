// ? Type Alias in Typescript

/* 
# The problem where arrissing that we have to create mutliple type for each object but we can minimize these using Type Alias. We can use these type in function or object

Syntax => type Name={
    key:datatype;
    ...
}

! Note : after every key there should be semi-colon (;)
*/

// $ Defining the Type
type Product = {
    name: string;
    id?: number;  // Optional Parameters
    manufacturer: {
        compname: string;
        city: string
    }
}

// $ Using the Type in the object
const product: Product = {
    name: "Laptop",
    id: 124,
    manufacturer: {
        city: "Boisar",
        compname: "Asus"
    }
}
console.log(product)

// $ using the type with optional parameters
const product1: Product = {
    name: "PC",
    manufacturer: {
        city: "Virar",
        compname: "Asus"
    }
}
console.log(product1)

// $ using the type in function
function getName(prod: Product): string {
    return prod.name
}
console.log(getName(product))
console.log(getName(product1))