import { Routes } from '@angular/router';
import { InstructorPageComponent } from './instructor/instructor-layout/instructor-page/instructor-page.component';
import { StudentPageComponent } from './student/student-layout/student-page/student-page.component';
import { AboutComponent } from './student/student-pages/about/about.component';
import { HomeComponent } from './student/student-pages/home/home.component';
import { AboutComponentInstructor } from './instructor/instructor-pages/about/about.component';
import { HomeComponentInstructor } from './instructor/instructor-pages/home/home.component';
import { ServiceComponent } from './student/student-pages/service/service.component';


export const routes: Routes = [
  {
    path: 'student',
    component: StudentPageComponent, // Ensure this is the correct component for routing
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      {path: 'service', component: ServiceComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'instructor',
    component: InstructorPageComponent,
    children: [
      // { path: 'home', component: HomeComponentInstructor },
      { path: 'about', component: AboutComponentInstructor },
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: 'Instructor-home', component: HomeComponentInstructor },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, // Handle 404 pages
];
