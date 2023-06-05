import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

@Injectable({
  providedIn: 'root'
})
export class StateSearchService {

  constructor(private apollo: Apollo) { }

  searchStates(args: String) {
    return this.apollo.watchQuery({
      query: gql`
        query SearchStates($args: String!) {
          searchStates(args: $args)
        }
      `,
      variables: {
        args
      }
    }).valueChanges;
  }
}
