import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acme-button-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.scss'
})
export class ButtonDeleteComponent {
 
}
