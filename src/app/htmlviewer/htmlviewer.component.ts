import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CodemirrorModule, CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-htmlviewer',
  templateUrl: './htmlviewer.component.html',
  styleUrls: ['./htmlviewer.component.scss']
})
export class HtmlviewerComponent implements AfterViewInit {
  @ViewChild('cm') private cm: CodemirrorComponent;
  @Input() xml: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.cm.codeMirror.setSize(null, '100%');
    setTimeout(() => this.cm.codeMirror.refresh(), 1);
  }

}
