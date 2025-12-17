import { Injectable } from '@angular/core';

export interface UserLogin {
  username: string,
  password: string
}

export interface UserData extends UserLogin {
  role: "Admin" | "Employee" | "Manager"
}

const userdata: UserData[] = [
  {
    username: "admin",
    password: "admin1234",
    role: "Admin"
  },
  {
    username: "employee",
    password: "employee1234",
    role: "Employee"
  }, {
    username: "manager",
    password: "manager1234",
    role: "Manager"
  }
]

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private currentUser: UserData | null = null

  loginUser(userloginform: UserLogin): UserData | undefined {
    const loggedInuser = userdata.find((value) => value.password === userloginform.password && value.username === userloginform.username)
    this.currentUser = loggedInuser!
    return loggedInuser
  }

  get isAuthenticated() {
    return this.currentUser?.role === "Admin"
  }

  get isManager() {
    return this.currentUser?.role === "Manager"
  }
}
