import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(), expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errorMsg: string;
  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe((leaders) => this.leaders = leaders, error => this.errorMsg = error );
  }

}
