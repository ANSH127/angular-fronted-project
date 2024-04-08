import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";


@Component({
  selector: 'app-navcard',
  standalone: true,
  imports: [RouterLink,NgHeroiconsModule],
  templateUrl: './navcard.component.html',
  styleUrl: './navcard.component.css'
})
export class NavcardComponent {

}
