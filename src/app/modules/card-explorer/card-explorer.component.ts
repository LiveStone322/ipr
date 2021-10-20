import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableObject } from 'src/app/shared/models/table.model';
import { RequestHandlerService } from 'src/app/shared/services/request-handler/request-handler.service';

@Component({
  selector: 'app-card-explorer',
  templateUrl: './card-explorer.component.html',
  styleUrls: ['./card-explorer.component.scss'],
})
export class CardExplorerComponent implements OnInit {
  element!: TableObject;

  constructor(private route: ActivatedRoute, private rhs: RequestHandlerService) {}

  ngOnInit(): void {
    this.rhs
      .requestById({ id: this.route.snapshot.params.entity }, this.route.snapshot.params.id)
      .subscribe((result) => {
        this.element = result.elements[0];
      });
  }

  public getAttributes(element: TableObject) {
    return Object.keys(element);
  }
}
