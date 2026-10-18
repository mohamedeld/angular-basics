import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule, MatPrefix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EcommerceStore } from '../../ecommerce-store';
@Component({
  imports: [
    ReactiveFormsModule,
    MatIconButton,
    MatIcon,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPrefix,
    MatAnchor,
  ],
  selector: 'app-sign-in-dialog',
  styleUrl: './sign-in-dialog.css',
  templateUrl: './sign-in-dialog.html',
})
export class SignInDialog {
  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  signInForm = this.fb.group({
    email: ['Mohamed@test.com', [Validators.required, Validators.email]],
    password: ['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
  });
  passwordVisible = signal<boolean>(false);

  handleTogglePassword() {
    this.passwordVisible.update((prev) => !prev);
  }
  signIn() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.signInForm.value;
    if (!email || !password) {
      return;
    }
    this.store.signIn({
      email,
      password,
      checkout: this.data.checkout,
      dialogId: this.dialogRef.id,
    });
  }
}
