import { Component, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SideBar {

}
