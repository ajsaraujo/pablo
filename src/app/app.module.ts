import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { PaletteComponent } from './components/palette/palette.component';
import { ColorComponent } from './components/color/color.component';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard.directive';
import { ToastComponent } from './components/toast/toast.component';
import { NewColorModalComponent } from './components/new-color-modal/new-color-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PaletteComponent,
    ColorComponent,
    CopyToClipboardDirective,
    ToastComponent,
    NewColorModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
