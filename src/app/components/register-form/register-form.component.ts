import { Component, inject, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {


  constructor(private router : Router){

  }

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ThirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required, ],
  });
  FourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.email],
  });
  isEditable = true;

  checkedBox! : string;
  selectedOption: string | null = null;
  homeOwnership : string | null = null;

  @Input()
  getValue(obj : any){
    return obj.value;
  }

  isFormCompleted(): boolean {
    return (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.ThirdFormGroup.valid
    );
  }

  isLinear : any
  

    complete1 : boolean = false;
  complete2 : boolean = false;

  submit(){
    
    if(this.homeOwnership!=null && this.isFormCompleted()){
    this.router.navigate(['/card']);

    }else {
      window.alert('Bạn chưa điền đủ thông tin cần thiết!');
    }
  }

  
}
