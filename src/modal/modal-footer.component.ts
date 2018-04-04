import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild ,OnInit} from '@angular/core';

@Component({
    selector: 'thy-modal-footer',
    templateUrl:'./modal-footer.component.html'
})
export class ModalFooterComponent implements OnInit {

    @Input() thyLoadingText?: string;
    @Output() thyOnSave: EventEmitter<any> = new EventEmitter<any>();
    @Output() thyOnCancel: EventEmitter<any> = new EventEmitter<any>();

    @ContentChild(TemplateRef)
    public footerTemplate: TemplateRef<any>;
    public isTemplateRef:boolean;

    public savingStatus: boolean;

    @Input()
    set thySaving(value: boolean) {
        this.savingStatus = value;
    }

    constructor() { }

    ngOnInit() {
        this.isTemplateRef = this.footerTemplate instanceof TemplateRef;
    }

    saveFn() {
        this.thyOnSave.emit();
    }

    cancelFn() {
        this.thyOnCancel.emit();
    }
}
