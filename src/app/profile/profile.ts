import { Component, input, model, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  value = input.required<number>();
  label = input('', { transform: this.trimString });
  trimString(value: string | undefined): string {
    return value?.trim() ?? '';
  }
  newVal = signal(12);

  valueModel = model(0);

  incrementThis() {
    this.valueModel.update((prev) => prev + 12);
  }
  planClosed = output<number>();

  clickPlan() {
    this.planClosed.emit(this.newVal());
  }
}
