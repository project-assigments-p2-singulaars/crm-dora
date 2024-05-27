import { Component } from '@angular/core';
import { WidgetComponent } from './components/widget/widget.component';

@Component({
  selector: 'acme-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
