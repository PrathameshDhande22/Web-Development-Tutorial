import { Component, computed, ElementRef, inject, Injector, OnInit, Renderer2, runInInjectionContext, Signal, signal, viewChild } from '@angular/core';
import { BehaviorSubject, catchError, delay, finalize, map, Observable, retry, shareReplay, Subject, tap } from 'rxjs';
import { ProductService } from '../../Services/productService';
import { Product } from '../../Types/ProductTypes';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
})
export class Rxjs implements OnInit {

  data_emitted = signal<number[]>([])
  messagedivbox = viewChild<ElementRef<HTMLDivElement>>("messagediv")
  logsdivbox = viewChild<ElementRef<HTMLDivElement>>("logsdiv")
  renderer2 = inject(Renderer2)

  // creating the instance of the subject
  emit_events$ = new Subject<string>()

  // create the instance of the BehaviorSubject with default value
  behavior_subject$ = new BehaviorSubject<number>(1);
  b_snumber = signal<number>(0)

  // getting the service for the product service
  productservice = inject(ProductService)
  private injector = inject(Injector)
  products: Signal<Product[] | undefined> = computed(() => [])

  constructor() {
    let no = 0;
    // emitting the next values on every interval
    setInterval(() => {
      this.behavior_subject$.next(no++);
    }, 1000)
  }

  ngOnInit(): void {
    // creating the observables
    const emitted_data$ = new Observable<number>((subscriber) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      setTimeout(() => {
        subscriber.next(4)
        subscriber.complete()
      }, 2000)
    })

    // subscribing to the data 
    // these is called as the observer
    emitted_data$.subscribe({
      next: (value) => {
        this.data_emitted().push(value)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.renderer2.setProperty(this.messagedivbox()?.nativeElement, "innerHTML", "data emitted successfully")
      }
    })

    // subscribe to the subject
    this.emit_events$.subscribe((value) => {
      const newspan = this.renderer2.createElement("span")
      this.renderer2.setProperty(newspan, "innerHTML", value)
      this.renderer2.appendChild(this.logsdivbox()?.nativeElement, newspan)
    })

    // subscribe to the behavior subject
    this.behavior_subject$.subscribe((value) => {
      this.b_snumber.set(value)
    })
  }

  emitEvent() {
    if (this.emit_events$.closed) {
      this.renderer2.setProperty(this.logsdivbox()?.nativeElement, "innerHTML", "Subscription Cancelled")
    } else {
      // send the values
      this.emit_events$.next("clicked")
    }
  }

  cancelSubscription() {
    // unsubscribe the subject same for the observables.
    this.emit_events$.unsubscribe()
  }

  fetchProducts() {
    const products$ = this.productservice.getAllProducts().pipe(

      /* 1️⃣ retry → retry failed HTTP */
      retry(2),

      /* 2️⃣ map → extract products */
      map(response => response.products),

      /* 3️⃣ filter → remove out-of-stock products */
      map(products =>
        products.filter((p: Product) => p.stock > 0)
      ),

      /* 4️⃣ tap → side effect (logging / analytics) */
      tap(products =>
        console.log('Available products:', products.length)
      ),

      /* 5️⃣ map → sort by rating */
      map(products =>
        products.sort((a: Product, b: Product) => b.rating - a.rating)
      ),

      /* 6️⃣ delay → simulate loading */
      delay(300),

      /* 7️⃣ shareReplay → cache API result */
      shareReplay(1,1000),

      /* 8️⃣ catchError → graceful fallback */
      catchError(() => {
        console.error('Failed to load products');
        return [];
      }),

      /* 9️⃣ finalize → stop loader */
      finalize(() => console.log('Products API completed'))
    )

    // must be run inside the injection context
    runInInjectionContext(this.injector, () => {
      // using the rxjs interop to convert the observable to signal
      this.products = toSignal<Product[] | undefined>(products$)
    })
  }
}
