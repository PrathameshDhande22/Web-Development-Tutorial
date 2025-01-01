export type Student = {
  name: string,
  std: number,
  age: number,
  school: string,
  rollNo: number,
  studentId: string
};

export const students: Student[] = [
  {
    name: "John Smith",
    std: 10,
    age: 15,
    school: "Green Valley High School",
    rollNo: 101,
    studentId: "GVHS101A"
  },
  {
    name: "Emily Davis",
    std: 9,
    age: 14,
    school: "Blue Ridge School",
    rollNo: 102,
    studentId: "BRS102B"
  },
  {
    name: "Michael Johnson",
    std: 11,
    age: 16,
    school: "Central Public School",
    rollNo: 103,
    studentId: "CPS103C"
  },
  {
    name: "Sarah Williams",
    std: 12,
    age: 17,
    school: "Green Valley High School",
    rollNo: 104,
    studentId: "GVHS104D"
  },
  {
    name: "David Brown",
    std: 10,
    age: 15,
    school: "Sunshine High School",
    rollNo: 105,
    studentId: "SHS105E"
  }
];
