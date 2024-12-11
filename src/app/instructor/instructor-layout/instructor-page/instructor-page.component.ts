import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class InstructorPageComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }
}
