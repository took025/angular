import { AbstractControl } from '@angular/forms';

export function atLeastOneUppercaseValidator(control: AbstractControl) {
    const regex = new RegExp(/[A-Z]/);

    if (regex.test(control.value)) return null;
    return { noUppercase: true };
}

export function atLeastOneLowercaseValidator(control: AbstractControl) {
    const regex = new RegExp(/[a-z]/);

    if (regex.test(control.value)) return null;
    return { noLowercase: true };
}
export function atLeastOneNumberValidator(control: AbstractControl) {
    const regex = new RegExp(/[0-9]/);

    if (regex.test(control.value)) return null;
    return { noNumber: true };
}