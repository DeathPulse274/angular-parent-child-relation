import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();



  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInputName.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverInputName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverInputName.value,
      serverContent: this.newServerContent
    })
  }



}
