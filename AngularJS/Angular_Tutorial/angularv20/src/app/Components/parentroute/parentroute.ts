import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parentroute',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './parentroute.html'
})
export class Parentroute {
  id = 123
  appname = "angulartutorial"
  // injecting the Router for programatic navigation
  router: Router = inject(Router)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  activateEventRouterOutlet() {
    alert("route is activated")
  }

  deactivateEventRouterOutlet() {
    alert("Route is Deactivated")
  }

  navigateToDynamicroute() {
    // Routing by navigate and query parameters
    this.router.navigate(["dynamic", this.id + 12, this.appname], {
      queryParams: {
        page: 1
      }
    })
  }

  navigateToRelative() {
    this.router.navigate(["child2"], { relativeTo: this.activatedRoute })
  }

  navigateToLifecycle() {
    this.router.navigateByUrl("/lifecycle")
  }
}
