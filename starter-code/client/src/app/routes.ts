//Crear fichero routes
//importar rutas
import { Routes } from '@angular/router';
//importar componentes
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
//exportar routes y son un array
export const routes: Routes = [
  {path: '',component: EntryListComponent},
  {path: 'journalInfo/:id', component: SingleEntryComponent }
]
