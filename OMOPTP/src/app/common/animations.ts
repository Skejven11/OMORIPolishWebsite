import { trigger, transition, style, query, animate, state, stagger } from "@angular/animations";

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

  export const logoAnimation =
  trigger('logoAnimation', [
    state('void',
      style({
        opacity: 0.1,
        display: 'absolute',
        top: -160
      })),
    transition('void => *', [
      query(':self', [
        animate('3s ease-in-out')
      ])
    ])
  ]);

  export const contentAnimation =
  trigger('contentAnimation', [
    transition('* => *', [
      query(':self', [
        style({ opacity: 0 }),
        animate('1s 3s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]);

  