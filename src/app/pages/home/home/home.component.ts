import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/core/interfaces/interface';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription = new Subscription();
  constructor(private dataService: DataService) { }
  response: Data[];

  ngOnInit(): void {
    this.subscription.add(
      this.dataService.getData().subscribe((res) => {
        this.response = res;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
