import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
// Importing the observable from the rxjs libarary
import {
  catchError,
  concatMap,
  debounceTime,
  delay,
  filter,
  from,
  fromEvent,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  range,
  retry,
  retryWhen,
  Subject,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  listofnumber: number[] = [];

  // creating the observable returning the stream of data
  obs: Observable<number> = new Observable<number>((observer) => {
    console.log('Observable Starts');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);

    setTimeout(() => {
      observer.next(6);
    }, 2000);
  });

  // creating the observable with error
  obserr: Observable<number> = new Observable<number>((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 2000);

    setTimeout(() => {
      observer.next(2);
    }, 2000);

    setTimeout(() => {
      observer.next(3);
    }, 2000);

    setTimeout(() => {
      observer.error('Failed to get the Data');
    }, 2000);

    setTimeout(() => {
      observer.next(1);
    }, 2000);
  });

  // These created observable does not emit the value to emit the value we need to subscribe to them.
  Subscribe() {
    // subscribing the observable
    this.obs.subscribe({
      next: (val) => {
        this.listofnumber.push(val);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  // subscribing to the observble which emits the error
  SubscribeError() {
    this.listofnumber = [];
    this.obserr
      .subscribe({
        next: (val) => {
          this.listofnumber.push(val);
        },
        error: (err) => {
          alert(err);
        },
      })
      .unsubscribe();
  }

  //#region Of Operator
  // creating the observable using string, array and object.
  // creating the observable using Create method but its deprecated. hence we will use the of Operator.
  obscreate: Observable<number[]> = of<number[]>([1, 2, 3, 4, 5, 6, 7]);

  BtnOf() {
    this.obscreate.subscribe({
      next: (val) => {
        console.log('Of method =>', val);
      },
    });
  }
  //#endregion

  //#region From Operator
  // creating the Observable using From Operator
  obsfrom = from<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  BtnFrom() {
    this.obsfrom.subscribe((data) => {
      console.log('From Operator => ', data);
    });
  }

  //#endregion

  //#region Observable Event

  @ViewChild('btnclick')
  btnObservable: ElementRef = null as any;

  btnFromEvent(): void {
    // applying the observable to the event
    fromEvent<HTMLButtonElement>(
      this.btnObservable.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log('FromEvent =>', data);
    });
  }

  //#endregion

  //#region observable Pipes

  // using the map operator
  obsnew$: Observable<number> = from<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]).pipe(
    tap<number>((val) => {
      console.log('Tap =>' + val);
    }),
    map<number, number>((value, index) => value * 2),
    filter<number>((value) => value % 5 == 0)
  );

  BtnPipes() {
    this.obsnew$.subscribe((data) => {
      console.log('Pipes =>', data);
    });
  }

  //#endregion

  //#region SwitchMap
  obsrange$: Observable<number> = new Observable<number>((observer) => {
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => observer.next(4), 2000);
    setTimeout(() => observer.next(5), 2000);
    setTimeout(() => observer.next(6), 2000);
    setTimeout(() => observer.next(7), 3000);
    setTimeout(() => observer.complete(), 4000);
  });
  innerobs$: Observable<string> = new Observable<string>((observer) => {
    setTimeout(() => observer.next('a'), 1500);
    setTimeout(() => observer.next('b'), 1000);
    setTimeout(() => observer.next('c'), 2000);
    setTimeout(() => observer.next('d'), 2000);
    setTimeout(() => observer.next('e'), 2000);
    setTimeout(() => observer.complete(), 2000);
  });

  BtnSwitch() {
    this.obsrange$
      .pipe(
        switchMap((val) => {
          console.log('Source Value =>' + val);
          console.log('Starting new Observable');
          return this.innerobs$;
        })
      )
      .subscribe((data) => {
        console.log('inner obs =>' + data);
      });
  }
  //#endregion

  //#region MergeMap
  BtnMerge() {
    this.obsrange$
      .pipe(
        mergeMap((val) => {
          console.log('Source Value =>' + val);
          console.log('Starting new observable');
          return this.innerobs$;
        })
      )
      .subscribe((data) => {
        console.log('merge obs =>' + data);
      });
  }
  //#endregion
  BtnConcat() {
    this.obsrange$
      .pipe(
        concatMap((val) => {
          console.log('Source Value =>' + val);
          console.log('Starting new observable');
          return this.innerobs$;
        })
      )
      .subscribe((data) => {
        console.log('concat obs =>' + data);
      });
  }
  //#region ConcatMap

  //#region Debounce Time
  BtnDebounce() {
    range(1, 10)
      .pipe(debounceTime(2000))
      .subscribe((data) => {
        console.log(data);
      });
  }
  //#endregion

  //#region Try and Catch Error
  BtnTryCatch() {
    range(1, 10)
      .pipe(
        map((val) => {
          if (val > 3) {
            throw new Error('Number greater than 3');
          }
          return val;
        }),
        retry(2),
        catchError((err, Caught) => {
          console.log('Caught Error');
          return of(0);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log('Catched the Error', err);
        },
      });
  }
  //#endregion

  //#region Subject
  // Creating the subject in angular
  subject$ = new Subject<number>();

  BtnSubject() {
    // Subscribing the subject
    this.subject$.subscribe((data) => {
      console.log('Value from Subject =>', data);
    });

    // assigning the next and complete method to it.
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
    this.subject$.complete();
  }
  //#endregion

  //#region subject listen to different tabs
  count: number = 1;
  countsubject: Subject<number> = new Subject<number>();

  ngOnInit() {
    this.countsubject.subscribe((data) => {
      this.count = data;
    });
  }

  BtnSubjectTrial(inc: -1 | 1) {
    this.countsubject.next(this.count + inc);
  }
  //#endregion
}
