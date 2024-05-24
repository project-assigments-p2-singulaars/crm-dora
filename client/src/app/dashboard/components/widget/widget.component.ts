import { Component, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'acme-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent implements OnInit {
  // public chart: Chart;

  // ngOnInit(): void {

  //   const data = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [{
  //       label: 'My first Dataset',
  //       data: [65,56,56,56,67,78, 78],
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1
  //     }]
  //   }
    
  //     this.chart = new Chart('chart', {
  //       type: 'line',
  //       data
  //     })
  //   }
  
  public chart: Chart;

  constructor(private bookService: DashboardService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      const genreCount = this.countGenres(books);
      this.createChart(genreCount);
    });
  }

  countGenres(books: any[]): { [key: string]: number } {
    const genreCount: { [key: string]: number } = {};
    books.forEach(book => {
      book.genres.forEach((genre: string) => {
        if (genreCount[genre]) {
          genreCount[genre]++;
        } else {
          genreCount[genre] = 1;
        }
      });
    });
    return genreCount;
  }

  createChart(genreCount: { [key: string]: number }): void {
    const labels = Object.keys(genreCount);
    const data = Object.values(genreCount);

    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Books by Genre',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
