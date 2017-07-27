import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
//component de id se usa ActivatedRoute
import { ActivatedRoute } from '@angular/router';
import { EntryListComponent } from '../entry-list/entry-list.component'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  //como es un solo objeto, tenemos que obtener todos los detalles del objeto
  id: string;
  title: string;
  date: Date;
  content: string;

  constructor( public route: ActivatedRoute, public oneJournalSrv : JournalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oneJournalSrv.getOneJournalEntry(this.id).subscribe( oneJournalInfo => {
        this.title = oneJournalInfo.title;
        this.content = oneJournalInfo.content;
        this.date = oneJournalInfo.date;
      });

    });
  }

}
