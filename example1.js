// Import the necessary RxJS modules
const { Observable } = require("rxjs");

let sequesnceCount = 5;
// Create an Observable that emits a sequence of numbers
const numberObservable = new Observable((observer) => { 
  
  for (let i = 0; i < sequesnceCount; i++) {
    setTimeout(() => {      
      observer.next(i);
      if (i == (sequesnceCount - 1)) {
        observer.complete();
      }
    }, 1000 * i);
  }
});

// Subscribe to the Observable and log each emitted value
const subscription = numberObservable.subscribe({
  next: (value) => console.log(`Next value: ${value}`),
  error: (error) => console.error(`Error: ${error}`),
  complete: () => console.log("Observable complete"),
});

// After some time, unsubscribe to stop receiving notifications
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed");
}, (sequesnceCount) * 1000);
