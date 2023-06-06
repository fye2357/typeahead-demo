import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

@Injectable({
  providedIn: 'root'
})
export class StateSearchService {

  constructor(private apollo: Apollo) { }

  searchStates(args: string) {
    return this.apollo.watchQuery({
      query: gql`
        query SearchStates($args: String!) {
          searchStates(args: $args) {
            name
            abbr
          }
        }
      `,
      variables: {
        args
      }
    }).valueChanges;
  }
}
