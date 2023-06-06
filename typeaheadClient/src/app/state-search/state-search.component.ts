import { Component } from '@angular/core';
import { StateSearchService } from '../state-search.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.css']
})
export class StateSearchComponent {
  term: string = "";
  searchTerms = new Subject<string>();
  states: string[] = [];

  selectState(state: any){
    
  }

  constructor(private stateSearchService: StateSearchService) {
    this.searchTerms.pipe(
      debounceTime(300),
      switchMap((term: string) => this.stateSearchService.searchStates(term))
    ).subscribe((result: any) => {
      this.states = result.data && result.data.searchStates;
    });
  }
}
