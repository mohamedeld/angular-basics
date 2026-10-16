import { Component, computed, linkedSignal, resource, signal } from '@angular/core';
import { Profile } from './profile/profile';

interface ShippingOption {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrl: './app.css',
  imports: [Profile],
})
export class App {
  userId = signal(1);

  userResource = resource({
    params: () => ({ id: this.userId() }),
    loader: async ({ params, abortSignal }) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
        signal: abortSignal,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const data = await response.json();
      return {
        id: data?.id,
        name: data?.name,
        email: data?.email,
      };
    },
  });
  userName = computed(() =>
    this.userResource.hasValue() ? this.userResource.value().name : undefined,
  );

  newData = signal(0);

  nextUser() {
    this.userId.update((prev) => prev + 1);
  }
  parentClicked(val: number) {
    console.log('first', val);
  }
}
