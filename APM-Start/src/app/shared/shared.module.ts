import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  // export `StarCompnent` to use it where the `SharedModule` is `import`ed
  exports: [
    StarComponent,
    CommonModule,
    FormsModule // https://angular.io/guide/reactive-forms
    // MaterialDesign // https://material.angular.io/
    // ConvertToSpacesPipe
  ]
})
export class SharedModule { }
