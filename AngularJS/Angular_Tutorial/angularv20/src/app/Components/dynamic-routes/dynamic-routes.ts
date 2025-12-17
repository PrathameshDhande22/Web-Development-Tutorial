import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-routes',
  imports: [JsonPipe],
  templateUrl: './dynamic-routes.html'
})
export class DynamicRoutes {
  // Get the current state for the route
  private activeroute: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)

  // path parameters save in signal
  id = signal<number>(0)
  app = signal<string | null>('')

  // resolved data from the routes
  userdata = toSignal(this.activeroute.data);

  // query parameter 
  page = signal<string | null>(null)

  constructor() {
    console.log("ChildrenRoute => ", this.activeroute.children)

    // read the path parameter these component contains the id and app parameters
    this.activeroute.paramMap.subscribe((value) => {
      this.id.set(Number(value.get("id")))
      this.app.set(value.get("app"))
    })

    // read the query parameters
    this.activeroute.queryParams.subscribe((value) => {
      this.page.set(value['page'])
    })
  }

  changetheIdandApp() {
    // changing the route by merging the previous url
    this.router.navigate(["dynamic", 145, "newapp"], { queryParamsHandling: 'preserve' })
  }

}
