import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
jobbs: any;
  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.jobService.getList().subscribe((job: any) => {
      console.log(job);
      this.jobbs = job.matchningslista.matchningdata;
      console.log(this.jobbs);
    });
  }

}
