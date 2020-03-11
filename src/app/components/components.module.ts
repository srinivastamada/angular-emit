import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent],
  exports: [UserProfileComponent, EditProfileComponent],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ComponentsModule {}
