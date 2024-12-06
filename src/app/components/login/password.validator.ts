import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    const hasMinLength = value.length >= 6;
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialChar = /[@$!%*?&]/.test(value);

    const errors: ValidationErrors = {};

    if (!hasMinLength) {
      errors['minLength'] = true;
    }
    if (!hasUppercase) {
      errors['uppercase'] = true;
    }
    if (!hasSpecialChar) {
      errors['specialChar'] = true;
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

}
