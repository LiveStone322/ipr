import { Component, OnInit } from '@angular/core';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { RequestHandlerService } from 'src/app/shared/services/request-handler/request-handler.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  public appModuleIdsEnum = AppModuleIds;

  constructor(private rs: RequestHandlerService) {}

  ngOnInit(): void {}
}
