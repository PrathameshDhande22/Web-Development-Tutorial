import { Component, ElementRef, inject, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

    this.emit_events$.subscribe((value) => {
      const newspan = this.renderer2.createElement("span")
      this.renderer2.setProperty(newspan, "innerHTML", value)
      this.renderer2.appendChild(this.logsdivbox()?.nativeElement, newspan)
    })
  }

  emitEvent() {
    if (this.emit_events$.closed) {
      this.renderer2.setProperty(this.logsdivbox()?.nativeElement, "innerHTML", "Subscription Cancelled")
    } else {
      this.emit_events$.next("clicked")
    }
  }

  cancelSubscription() {
    this.emit_events$.unsubscribe()
  }
}
