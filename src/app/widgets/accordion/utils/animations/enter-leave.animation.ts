import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export function enterLeave(name: string, ms: number): AnimationTriggerMetadata {
  return trigger(name, [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate(ms, style({ height: '*', opacity: 1 })),
    ]),
    transition(':leave', [animate(ms, style({ height: 0, opacity: 0 }))]),
  ]);
}
