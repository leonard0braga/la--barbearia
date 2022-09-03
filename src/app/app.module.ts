import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CorpoSobreComponent } from './shared/corpo-sobre/corpo-sobre.component';
import { ServicoCorpoComponent } from './shared/servico-corpo/servico-corpo.component';
import { LocalRotaComponent } from './shared/local-rota/local-rota.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContatoComponent } from './shared/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CorpoSobreComponent,
    ServicoCorpoComponent,
    LocalRotaComponent,
    FooterComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
