import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionsComponent } from './suggestions.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    SuggestionsComponent,
    SuggestionsListComponent,
    SuggestionDetailsComponent
  ]
})
export class SuggestionsModule { }
