import { Injectable } from '@angular/core';

export type User = {
  username: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { username: 'johndoe', password: 'password123' },
    { username: 'janesmith', password: 'securePass456' },
    { username: 'mikejohnson', password: 'mike789!@#' },
  ];

  public isLoggedIn: boolean = false;

  login(username: string, password: string) {
    let user: User = this.users.find(
      (u) => u.username === username && u.password === password
    ) as User;

    if (user !== undefined) {
      this.isLoggedIn = true;
    }
    return user;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
