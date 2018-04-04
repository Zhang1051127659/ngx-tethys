import { Component, NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ThyButtonModule } from './button/button.module';
import { ThyLayoutModule } from './layout/layout.module';
import { NgxPopBoxModule } from './pop-box/pop-box.module';
import { ThyGridModule } from './grid/grid.module';
import { ThyAvatarModule } from './avatar/avatar.module';
import { ThyBadgeModule } from './badge/badge.module';
import { ThyLabelModule } from './label/label.module';
import { ThyNavModule } from './nav/nav.module';
import { ThyModalModule } from './modal/modal.module';


@NgModule({
    declarations: [
    ],
    imports: [
        ModalModule.forRoot(),
        ThyLayoutModule,
        ThyButtonModule,
        NgxPopBoxModule,
        ThyBadgeModule,
        ThyGridModule,
        ThyAvatarModule,
        ThyLabelModule,
        ThyNavModule,
        ThyModalModule
    ],
    exports: [
        ThyLayoutModule,
        ThyButtonModule,
        ThyBadgeModule,
        ThyGridModule,
        ThyAvatarModule,
        ThyLabelModule,
        ThyNavModule,
        ThyModalModule
    ],
    providers: [
    ]
})
export class NgxTethysModule {

}

