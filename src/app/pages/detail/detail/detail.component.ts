import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/core/interfaces/interface';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private subscription = new Subscription();
  response: Data = {};


  constructor(private route: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit(): void {
    const id: Number = Number(this.route.snapshot.params.id);
    this.subscription.add(
      this.dataservice.getDataId(id).subscribe((res) => {
        this.response = res;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
