import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELETED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected='';

  constructor(
    private translate:TranslateService,
    private storage:Storage
  ) { 

  }


  setInitialAppLanguage(){
     let language= this.translate.getBrowserLang();
     this.translate.setDefaultLang(language);
     
     this.storage.get(LNG_KEY).then( (response)=>{
        if(response){
          this.setLanguages(response);
          this.selected=response;
        }
     });

  }

  getLangages(){
    return [
      { text:'English', value:'en', img:'assets/imgs/en.png'},
      { text:'Spanish', value:'es', img:'assets/imgs/es.png'}
    ];
  }

  setLanguages(lng){
    this.translate.use(lng);
    this.selected=lng;
    this.storage.set(LNG_KEY, lng);
  }


}
