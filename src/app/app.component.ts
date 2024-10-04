import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule,CommonModule],
  providers: [TranslateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 
  constructor(public translate:TranslateService) {
    this.translate =  inject(TranslateService) 
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    if(browserLang) {
      this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
   
  }
}
