import { Component } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  params={
    name: 'Simon '
  };

  constructor(
    private popoverCtrl: PopoverController,
    private alertController:AlertController,
    private translate: TranslateService
  ) {
  
  }

  async showAlert(ev){

    const popover = await this.alertController.create({
       header: this.translate.instant('ALERT.header'),
       message: this.translate.instant('ALERT.msg'),
       buttons:['OK']
    });

    await popover.present();

  }

  async openLanguagePopover(ev){

    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });

    await popover.present();

  }

}
