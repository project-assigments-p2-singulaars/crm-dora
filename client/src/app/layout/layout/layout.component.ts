import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'acme-layout',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, DashboardComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
