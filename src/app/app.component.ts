import { Component } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobsAPI';
  constructor(private jobSearch: JobsService) {}

  ngOnInit() {
  }
}
