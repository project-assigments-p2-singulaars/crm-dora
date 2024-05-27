import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acme-button-add',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMiniFabButton],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss'
})
export class ButtonAddComponent {
  @Input() route: string;
  @Input() buttonText: string;
  private router = inject( Router );

  handleNewItem(){
    this.router.navigate([this.route]);
  }
}
