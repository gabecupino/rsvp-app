import { Component } from '@angular/core';

// var confirmationMap = new Object(),
//     YbRuSC39 = new Object(),
//     i8NAiJXu = new Object(),
//     jWVDeDpC = new Object(),
//     D5LAChrE = new Object(),
//     aYhvNX3j = new Object(),
//     PgRU57bu = new Object();

// confirmationMap['YbRuSC39'][0] = 'Sarah Cupino';

export class ConfirmationMap {
    list:Array<Object>;

    constructor() {
        this.list = [
            {YbRuSC39:new Object()},
            {i8NAiJXu:new Object()},
            {jWVDeDpC:new Object()}
        ]
        this.list['YbRuSC39']['Sarah Cupino'] = false;
        this.list['YbRuSC39']['Fidel Cupino'] = false;
        this.list['YbRuSC39']['Gabriel Cupino'] = false;
        this.list['YbRuSC39']['Michael Cupino'] = false;
    }
}


@Component({
    selector: 'rsvp-data',
})


export class ConfirmationComponent {
    confirmationMap: ConfirmationMap;
}