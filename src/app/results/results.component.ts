import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  jobs: [];
  constructor(private route: ActivatedRoute, private jobsService: JobsService) { }

  ngOnInit() {
    this.route.params.subscribe(jobs => {
    console.log(jobs.job);
  });
  }

}
