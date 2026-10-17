import { inject, Service } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';

@Service()
export class Toaster {
  toaster = inject(HotToastService);

  success(message: string) {
    this.toaster.success(message);
  }
  error(message: string) {
    this.toaster.error(message);
  }
}
