import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faTrash,
  faXmark,
  faGear,
  faUser,
  faPlus,
  faPen,
} from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  exports: [
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class FontAwesome6Module {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faMagnifyingGlass,
      faTrash,
      faXmark,
      faGear,
      faUser,
      faPlus,
      faPen,
      )
  }
}
