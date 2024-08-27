import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  bannerResult: any = [];

  ngOnInit(): void {
    this.bannerData();
  }

  //BANNER-DATA//

  bannerData() {
    this.apiService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
}
