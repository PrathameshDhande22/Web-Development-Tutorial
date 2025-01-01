import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "privacy", component: PrivacyComponent },
    { path: "contact", component: ContactComponent },
    { path: "todo", loadChildren: () => import("./pages/todo/todo.routes") }
];
