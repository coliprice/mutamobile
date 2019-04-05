import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './contact/homepage/homepage.component';
import { LoginComponent } from './contact/login/login.component';
import { ValidationParticipationComponent } from './contact/validation-participation/validation-participation.component';
import { HomepageUserComponent } from './contact/homepage-user/homepage-user.component';
import { AjouterCampagneComponent } from './service_com/ajouter-campagne/ajouter-campagne.component';
import { ParametrageSiComponent } from './service_info/parametrage-si/parametrage-si.component';
import { ParametrageConsentementComponent } from './service_info/parametrage-consentement/parametrage-consentement.component';
import { ResultatTirageComponent } from './service_info/resultat-tirage/resultat-tirage.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card'; 
import { MatCarouselModule,MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { TestFormComponent } from './contact/test-form/test-form.component';
import { FormulaireInscriptionComponent } from './contact/formulaire-inscription/formulaire-inscription.component';
import { ReactiveFormsModule} from '@angular/forms'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/icon'; 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ValidationParticipationComponent,
    HomepageUserComponent,
    AjouterCampagneComponent,
    ParametrageSiComponent,
    ParametrageConsentementComponent,
    ResultatTirageComponent,
    TestFormComponent,
    FormulaireInscriptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
