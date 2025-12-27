import { Routes } from '@angular/router';
import { DynamicRoutes } from './Components/dynamic-routes/dynamic-routes';
import { NotFound } from './Components/not-found/not-found';
import { Trial } from './Services/trial';
import { Parentroute } from './Components/parentroute/parentroute';
import { Childroute } from './Components/parentroute/childroute/childroute';
import { AppLifeCycleRouteComponent } from './Components/app-life-cycle-route-component/app-life-cycle-route-component';
import { Childroute2 } from './Components/parentroute/childroute2/childroute2';
import { Childroute3 } from './Components/parentroute/childroute3/childroute3';
import { Pathmatch } from './Components/pathmatch/pathmatch';
import { Guardstut } from './Components/guardstut/guardstut';
import { AdminComponent } from './Components/guardstut/admin-component/admin-component';
import { accessGuardGuard } from './Guards/access-guard-guard';
import { ManagerComponent } from './Components/guardstut/manager-component/manager-component';
import { activechildGuard } from './Guards/activechild-guard';
import { Sample } from './Components/guardstut/manager-component/sample/sample';
import { CanDeactivateComponent } from './Components/guardstut/can-deactivate/can-deactivate';
import { deactivateGuardGuard } from './Guards/deactivate-guard-guard';
import { matchguardGuard } from './Guards/matchguard-guard';
import { userResolverResolver } from './user-resolver-resolver';
import { Formstut } from './Components/formstut/formstut';
import { Reactiveformstut } from './Components/formstut/reactiveformstut/reactiveformstut';
import { Typedreactiveform } from './Components/formstut/typedreactiveform/typedreactiveform';
import { Templateform } from './Components/formstut/templateform/templateform';
import { HttpClientRequests } from './Components/http-client-requests/http-client-requests';
import { Rxjs } from './Components/rxjs/rxjs';
import { RouterRendering } from './Components/router-rendering/router-rendering';
import { ServerSide } from './Components/server-side/server-side';
import { DragComponent } from './Components/drag-component/drag-component';

// defining the routes
// the first two routes are static url meaning they are never gonna change
export const routes: Routes = [
    {
        path: "",
        redirectTo: "essentials",
        pathMatch: "full"
    },
    {
        // lazy load the component
        path: "essentials",
        loadComponent: () => import('./Components/essentials/essentials').then(m => m.Essentials),
        // settings the title for each component
        title: "Angular Essentials"
    },
    {
        // giving the path and component only 
        path: "lifecycle",
        component: AppLifeCycleRouteComponent
    },
    {
        // these is the dynamic routes
        path: "dynamic/:id/:app",
        component: DynamicRoutes,
        // providing the static data to the route
        data: {
            AnalyticsId: 123
        },
        // providing the resolver
        resolve: [
            userResolverResolver
        ],
        // providers property for providing the service
        providers: [
            Trial
        ]
    },
    // nested routes passed using childrens property 
    {
        path: "parent",
        component: Parentroute,
        children: [
            {
                path: "child",
                component: Childroute
            },
            {
                path: "child2",
                component: Childroute2
            },
            {
                path: "child3",
                component: Childroute3,
                outlet: "child3-section"
            }
        ]
    },
    {
        // redirect to other path
        path: "essential-second",
        redirectTo: "/essentials"
    },
    {
        path: "pathmatch",
        component: Pathmatch,
        pathMatch: "full"
    },
    {
        path: "pathmatch/:new",
        component: Pathmatch
    },
    {
        path: "guard",
        component: Guardstut,
        children: [
            {
                path: "admin",
                component: AdminComponent,
                canActivate: [accessGuardGuard]
            },
            {
                path: "deactivate",
                component: CanDeactivateComponent,
                canDeactivate: [deactivateGuardGuard]
            },
            {
                path: "match",
                loadComponent: () => import("./Components/guardstut/can-matchcomp/can-matchcomp").then((component) => component.CanMatchcomp),
                canMatch: [matchguardGuard]
            }
        ]
    },
    {
        path: "manager",
        component: ManagerComponent,
        // applies the guard to all the childrens
        canActivateChild: [activechildGuard],
        children: [
            {
                path: "sample",
                component: Sample
            }
        ]
    },
    {
        path: "formstut",
        component: Formstut,
        children: [
            {
                path: "reactive",
                component: Reactiveformstut
            },
            {
                path: "typed-reactive",
                component: Typedreactiveform
            },
            {
                path: "template",
                component: Templateform
            }
        ]
    },
    {
        // component regarding the http client requests. 
        path: "httpclient",
        component: HttpClientRequests
    },
    {
        path: "rxjs",
        component: Rxjs,
        pathMatch: "full"
    },
    {
        path: "routerendering",
        component: RouterRendering,
        children: [
            {
                path: "server-rendering",
                component: ServerSide
            }
        ]
    },
    {
        path: "drag",
        component: DragComponent
    },
    {
        // Wild card route
        path: "**",
        component: NotFound
    }
];
