import { Component } from '@angular/core';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable',
    options: {
      jsPDF: {
        orientation: 'landscape',
      } // to add header and footer
    }
  };

  constructor(
    private exportAsService: ExportAsService
  ) { }

  exportAs() {
    
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
  }


}

