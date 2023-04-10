import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../pages/cards/cards.module';
import { ButtonsAndIconsModule } from '../pages/buttons-and-icons/buttons-and-icons.module';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { DialogsModule } from '../pages/dialogs/dialogs.module';
import { TablasModule } from '../pages/tablas/tablas.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CardsModule,
    ButtonsAndIconsModule,
    FormulariosModule,
    DialogsModule,
    TablasModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
