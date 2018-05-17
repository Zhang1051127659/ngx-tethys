import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'thy-switch',
    templateUrl: './switch.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ThySwitchComponent),
        multi: true
    }]
})
export class ThySwitchComponent implements OnInit, ControlValueAccessor {

    public model: any;

    public type?: String = 'primary';

    public size?: String = '';

    public disabled?: Boolean = false;

    public thyClassName = '';

    public typeArray: any = ['primary', 'info', 'warning', 'danger'];

    public sizeArray: any = ['lg', '', 'sm'];

    @Input()
    set thyType(value: string) {
        if (!this.typeArray.includes(value)) {
            value = 'primary';
        }
        this.type = value;
    }

    @Input()
    set thySize(value: string) {
        if (!this.sizeArray.includes(value)) {
            value = '';
        }
        this.size = value;
    }


    @Input()
    set thyDisabled(value: boolean) {
        this.disabled = value;
    }

    @Output() thyChange: EventEmitter<Event> = new EventEmitter<Event>();


    constructor() {

    }

    public onModelChange: Function = () => {

    }

    public onModelTouched: Function = () => {

    }

    writeValue(value: any) {
        this.model = value;
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    setDisabledState(isDisabled:Boolean){
        this.disabled = isDisabled;
        this.setClass();
    }

    toggle(event: any) {
        this.model = !this.model;
        this.onModelChange(this.model);
        this.thyChange.emit(event);

    }

    setClass() {
        if (this.size !== '') {
            this.thyClassName = this.thyClassName + ' ' + 'thy-switch-' + this.size;
        }
        this.thyClassName = this.thyClassName + ' ' + 'thy-switch-' + this.type;
        if (this.disabled) {
            this.thyClassName = this.thyClassName + ' ' + 'thy-switch-disabled';
        }
    }

    ngOnInit() {
        this.setClass();
    }

}
