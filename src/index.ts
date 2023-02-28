import {of, from, timer, range } from 'rxjs';

const o = range(0, 10)

o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
});


(async function flows() {
  const res = await fetch('https://api.github.com/search/repositories?q=${rxjs}').then(res => res.json())

  const data$ = from(res.items)

  

  timer(5000)
  data$.pipe()
  .subscribe({
    next: result => console.log(result),
    complete: () => console.log('done')
  });
})()


