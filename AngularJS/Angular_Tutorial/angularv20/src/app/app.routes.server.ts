import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: "",
    renderMode: RenderMode.Client
  },
  {
    path: "essentials",
    renderMode: RenderMode.Prerender
  },
  {
    path: "lifecycle",
    renderMode: RenderMode.Client
  },
  {
    path: "dynamic/:id/:app",
    renderMode: RenderMode.Server
  },
  {
    path: "parent",
    renderMode: RenderMode.Client
  }
  , {
    path: "parent/child",
    renderMode: RenderMode.Client
  },
  {
    path: "parent/child2",
    renderMode: RenderMode.Client
  },
  {
    path: "parent/child3",
    renderMode: RenderMode.Client
  },
  {

    path: "essential-second",
    renderMode: RenderMode.Client
  },
  {
    path: "pathmatch",
    renderMode: RenderMode.Client
  },
  {
    path: "pathmatch/:new",
    renderMode: RenderMode.Client
  },
  {
    path: "guard",
    renderMode: RenderMode.Client
  },
  {
    path: "guard/admin",
    renderMode: RenderMode.Client
  },
  {
    path: "guard/deactivate",
    renderMode: RenderMode.Client
  },
  {
    path: "guard/match",
    renderMode: RenderMode.Client
  },
  {
    path: "manager",
    renderMode: RenderMode.Client
  },

  {
    path: "manager/sample",
    renderMode: RenderMode.Client
  },
  {
    path: "formstut",
    renderMode: RenderMode.Client
  },
  {
    path: "formstut/reactive",
    renderMode: RenderMode.Client
  },
  {
    path: "formstut/typed-reactive",
    renderMode: RenderMode.Client
  },
  {
    path: "formstut/template",
    renderMode: RenderMode.Client
  },
  {

    path: "httpclient",
    renderMode: RenderMode.Client
  },
  {
    path: "rxjs",
    renderMode: RenderMode.Client
  },
  {
    path: "routerendering",
    renderMode: RenderMode.Client
  },
  {
    path: "routerendering/server-rendering",
    /* Server Side Rendering */
    renderMode: RenderMode.Server
  },
  {
    path: "**",
    // SSG client rendering 
    renderMode: RenderMode.Prerender
  }
];
