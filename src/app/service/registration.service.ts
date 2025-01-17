import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  register(registration: Registration) {
    console.log(registration);
  }
}
