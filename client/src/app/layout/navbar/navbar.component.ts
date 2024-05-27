import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'acme-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatSidenavModule, MatListModule, MatIconModule, MatButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  authService = inject( AuthService );

  ngOnInit(): void {
    console.log( this.authService.isLogged() );
  }

  handleLogout(){
    this.authService.logout();
  }
}
