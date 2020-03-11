import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  userProfileData = {
    name: '',
    about: ''
  };

  editProfileStatus = false;

  constructor() {}

  ngOnInit() {
    this.getUserProfileData();
    console.log(this.userProfileData);
  }

  getUserProfileData() {
    /* Get this data from the API */
    this.userProfileData.name = 'Srinivas Tamada';
    this.userProfileData.about = 'Make people fall in love with your ideas.';
  }

  /* toggle the edit profile status */
  editProfileToggle() {
    this.editProfileStatus = !this.editProfileStatus;
  }

  /* update the user profile */
  updateProfile(data: any) {
    this.userProfileData.name = data.name;
    this.userProfileData.about = data.about;
    this.editProfileToggle();
  }
}
