import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button'
import {FloatLabel} from 'primeng/floatlabel'
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RegistrationService } from '../service/registration.service';
import { Registration } from '../model/registration';


@Component({
  selector: 'app-registration',
  imports: [ButtonModule, FloatLabel,  CommonModule, ReactiveFormsModule, CheckboxModule, InputTextModule, CalendarModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder){
  }
  registrationForm!: FormGroup;
  submitting: boolean = false;

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['Raju', [Validators.required]],
      lastName: ['Gurung', Validators.required],
      mi: [''],
      email: ['', [Validators.required, Validators.email]],
      dob: []

    });
  }

  

  submitRegForm() {
    this.submitting = true;
    this.registrationService.register({...this.registrationForm.value} as Registration);

  }
}
