import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const retypedPassword = control.get('retypedPassword')?.value;
  if (!password || !retypedPassword) return null;
  return password === retypedPassword ? null : { passwordMismatch: true };
};
