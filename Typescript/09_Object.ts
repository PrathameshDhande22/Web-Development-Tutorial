// ? Objects in Typescript

// # Defining the type for object
const Student: {
    name: string;
    id: number;
    address: {
        city: string;
        country: string
    }
} = {
    name: "Prathamesh",
    id: 12,
    address: {
        city: "Boisar",
        country: "India"
    }
}
console.log(Student)
console.log(Student.address.country)

/* 
! but there is problem with these we can't create the type for every object so to overcome these lookup for the next topic
*/