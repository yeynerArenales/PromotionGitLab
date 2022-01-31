import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  logoUrl: string = `${environment.baseUrl}assets/images/gitlab-logo-color.png`
  blueLogo: string = `${environment.baseUrl}assets/images/gitlab.png`

  constructor() { }

  ngOnInit(): void {
  }

}
