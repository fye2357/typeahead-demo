import { Component } from '@angular/core';
import { StateSearchService } from '../state-search.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.css']
})
export class StateSearchComponent {
  searchTerm = new Subject<string>();
  states = [];

  constructor(private stateSearchService: StateSearchService) {
    this.searchTerm.pipe(
      // pass search term if there has been a pause in input of 300 milliseconds.
      debounceTime(300),
      // cancels any in-flight request if a new value comes 
      switchMap((term: string) => this.stateSearchService.searchStates(term))
    ).subscribe((result: any) => {
      this.states = result.data.searchStates;
    });
  }
}
