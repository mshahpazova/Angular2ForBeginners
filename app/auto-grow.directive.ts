import {Directive, ElementRef} from 'angular2/core';
@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    // inside the method below we access the host element
     onFocus(){

     }
} 