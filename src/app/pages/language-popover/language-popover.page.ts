import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {

  languages=[];
  selected='';

  constructor(
    private popoverController:PopoverController,
    private languageService:LanguageService
  ) { }

  ngOnInit() {
    this.languages = this.languageService.getLangages();
    this.selected = this.languageService.selected;

   
  }

  select(lng){
    this.languageService.setLanguages(lng);
    this.popoverController.dismiss();
  }

}
