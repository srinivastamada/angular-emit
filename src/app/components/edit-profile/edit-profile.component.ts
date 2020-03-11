import { AfterViewInit, Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements AfterViewInit {
  @ViewChild('profileName', {static: true}) inputElement: IonInput;
  @Output() cancelEditProfile = new EventEmitter();
  @Output() updateProfileData = new EventEmitter<any>();
  public newUserProfileData = {
    name: '',
    about: ''
  };
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputElement.setFocus();
    }, 400);
  }

  cancelEditProfileAction() {
    this.cancelEditProfile.emit();
  }

  updateProfileAction() {
    if(this.newUserProfileData.name){
      this.updateProfileData.emit(this.newUserProfileData);
    }
  }

}
