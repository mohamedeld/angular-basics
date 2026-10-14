import { Component, computed, linkedSignal, resource, signal } from '@angular/core';

interface ShippingOption {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrl: './app.css',
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

  nextUser() {
    this.userId.update((prev) => prev + 1);
  }
}
