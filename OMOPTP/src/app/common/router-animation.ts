import { trigger, transition, style, query, animate } from "@angular/animations";

export const routerAnimation =
  trigger('routerAnimation', [
    transition('* => *', [
      query(':enter', [
        style({
          opacity: 0,
          position: 'absolute'
        })
      ],
      { optional: true }
      ),
      query(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease',
          style({ opacity: 0 })
        ),
        style({ position: 'absolute '})
      ],
      { optional: true }
      ),
      query(':enter', [
        style({ opacity: 0, position: 'relative' }),
        animate('500ms ease', 
          style({ opacity: 1 })
        )
      ],
      { optional: true }
      )
    ])
  ]);