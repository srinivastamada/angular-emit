import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userProfile: any;
  @Output() editProfile = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  editProfileAction() {
    this.editProfile.emit();
  }
}
