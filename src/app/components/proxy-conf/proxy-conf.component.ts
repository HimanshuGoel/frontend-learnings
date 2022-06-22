import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proxy-conf',
  templateUrl: './proxy-conf.component.html',
  styleUrls: ['./proxy-conf.component.scss']
})
export class ProxyConfComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  callService() {
    // this.httpClient.get('api/applications').subscribe({
    //   next: (data: any) => {
    //     alert(data.status);
    //   },
    //   error: (error) => {
    //     alert(error);
    //   }
    // });

    this.httpClient.get('ui-config/sample-app/app-config-en.json').subscribe({
      next: (data: any) => {
        alert(data.status);
      },
      error: (error) => {
        alert(error);
      }
    });
  }
}
