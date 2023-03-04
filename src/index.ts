import { from } from 'rxjs';
import { filter, pluck, delay, tap } from 'rxjs/operators';

(async function github() {
  const res = await fetch(
    'https://api.github.com/search/repositories?q=${rxjs}',
  ).then(res => res.json());

  interface IItem {
    archived: boolean;
  }

  const data$ = from(res.items);

  data$
    .pipe(
      delay(1300),
      tap(n => filter((item: IItem) => item.archived !== true)),
    )
    .subscribe({
      next: result => console.log(result),
      complete: () => console.log('done'),
    });
})();

(async function gitlab() {
  const res = await fetch('https://gitlab.com/api/v4/projects').then(res =>
    res.json(),
  );

  const data$ = from(res);

  data$.pipe(pluck('name')).subscribe({
    next: result => console.log(result),
    complete: () => console.log('done'),
  });
})();
