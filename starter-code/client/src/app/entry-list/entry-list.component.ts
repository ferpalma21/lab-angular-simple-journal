import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  //para obtener la lista con titulo y la fecha (los componentes son diferentes por eso any)
  journal: Object[];
  // journalSrv es el nombre de la variable de JournalService
  constructor( public journalSrv : JournalService) { }

  //se usa journalSrv por la variable,
  //getJournalEntries es la funcion que creamos en services/journal.service
  //subscribe es una promesa que le pasamos un argumento y this.journal es la info que tiene journalInfo
  ngOnInit() {
    this.journalSrv.getJournalEntries()
      .subscribe(journalInfo => {
        this.journal=journalInfo;
      });
  }

}
