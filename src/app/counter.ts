import { Service, signal } from '@angular/core';

@Service()
export class Counter {
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly();

  increment() {
    this._count.update((prev) => prev + 1);
  }
}
