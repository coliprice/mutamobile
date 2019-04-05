import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireInscriptionComponent } from './contact/formulaire-inscription/formulaire-inscription.component';
import { HomepageComponent } from './contact/homepage/homepage.component';
import { HomepageUserComponent } from './contact/homepage-user/homepage-user.component';
import { LoginComponent } from './contact/login/login.component';
import { ValidationParticipationComponent } from './contact/validation-participation/validation-participation.component';
import { AjouterCampagneComponent } from './service_com/ajouter-campagne/ajouter-campagne.component';
import { ParametrageSiComponent } from './service_info/parametrage-si/parametrage-si.component';
import { ParametrageConsentementComponent } from './service_info/parametrage-consentement/parametrage-consentement.component';
import { ResultatTirageComponent } from './service_info/resultat-tirage/resultat-tirage.component';

const routes: Routes = [
  { path: 'formulaire-inscription', component: FormulaireInscriptionComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'homepage-user', component: HomepageUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'validation-participation', component: ValidationParticipationComponent },

  { path: 'ajouter-campagne', component: AjouterCampagneComponent },

  { path: 'parametrage-si', component: ParametrageSiComponent },
  { path: 'parametrage-consentement', component: ParametrageConsentementComponent },
  { path: 'resultat-tirage', component: ResultatTirageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
