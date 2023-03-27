import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() title:string = "";
  @Input() data:any[] = []
  @Output() SelectedData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  detectedChanges(event:any){
    return this.SelectedData.emit(event); 
  }

}
