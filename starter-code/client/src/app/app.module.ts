import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Import Router
import { RouterModule } from '@angular/router';

//así como se exporta se tiene que importar
import { routes } from './routes';

import { AppComponent } from './app.component';

// import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalService } from '../services/journal.service';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Router MODULE que no se te olvide
    RouterModule.forRoot(routes)
  ],
  providers: [ JournalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
