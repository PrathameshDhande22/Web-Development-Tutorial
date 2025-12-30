import { Routes } from '@angular/router';
import { Counter } from './Components/counter/counter';

export const routes: Routes = [{
    path: "",
    pathMatch: "full",
    component: Counter
},
{
    path: "signal-store",
    loadComponent: () => import("./Components/signal-store-counter/signal-store-counter").then(mod => mod.SignalStoreCounter)
}];
