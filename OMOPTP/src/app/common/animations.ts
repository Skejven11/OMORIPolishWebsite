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
    transition('* => true', [
      query(':self', [
        style({ opacity: 0, display: 'absolute',
        top: -160 }),
        animate('2s ease-in-out', style({ opacity: 1, display: 'relative', top: 0 }))
      ])
    ])
  ]);

  export const contentAnimation =
  trigger('contentAnimation', [
    transition('* => true', [
      query(':self', [
        style({ opacity: 0 }),
        animate('1s 2s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]);

  export const adAnimation =
  trigger('adAnimation', [
    transition('* => true', [
      query(':self', [
        style({ bottom: -300 }),
        animate('2s 10s ease-in-out', style({ bottom: -2 }))
      ])
    ])
  ]);

  export const popAnimation =
  trigger('popAnimation', [
      state('closed', style({
        top: '-100px'
      })),
      state('open', style({
        top: '20px'
      })),
      transition('open => closed', [
        animate('0.25s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in-out')
      ])
  ]);

  export const scrollAnimation =
  trigger('scrollAnimation', [
    state('closed', style({
      left: '-100px'
    })),
    state('open', style({
      left: '-6px'
    })),
    transition('open => closed', [
      animate('0.25s ease-in-out')
    ]),
    transition('closed => open', [
      animate('0.5s ease-in-out')
    ])
  ]);

  export const whiteSpaceAnimation =
  trigger('whiteSpaceAnimation', [
    transition('void => *', [
      style({opacity: '0'}),
      animate('6s',
        style({opacity: '1'})
      )
    ]),
    transition('* => void', [
      animate('4s',
        style({opacity: '0'})
      )
    ]),
  ]);

  export const secretMenuAnimation =
  trigger('secretMenuAnimation', [
    state('closed', style({
      left: '-240px'
    })),
    state('open', style({
      left: '-5px'
    })),
    transition('open => closed', [
      animate('0.5s ease-in-out')
    ]),
    transition('closed => open', [
      animate('0.5s ease-in-out')
    ])
  ]);

  