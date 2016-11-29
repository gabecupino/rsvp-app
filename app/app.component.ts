import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})


export class AppComponent  {
  map = {
    YBR: { confirmedNames: [
      'JM Cupino',
      'Lovelle Cupino',
      'Dylan Cupino',
      'Gisel Cupino'
      ],
      plusOnes: 0
    },
    I8N: { confirmedNames: [
      'Justin Angcaco',
      ],
      plusOnes: 1
    },
  };
  currentCode = '';
  currentPlusOnes: string[];

  submit(code: string) {
    console.log(code);
    this.currentCode = code;
    if (this.map[code] !== undefined) {
      this.currentPlusOnes = new Array(this.map[code].plusOnes)
      // for (var i = 0; i < this.map[code]; i++) {
      //   this.currentPlusOnes[i] = '';
      // }
    }
  }
}
