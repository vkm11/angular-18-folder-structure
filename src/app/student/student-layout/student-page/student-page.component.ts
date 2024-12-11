import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';  

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, IonicModule],
})
export class StudentPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
