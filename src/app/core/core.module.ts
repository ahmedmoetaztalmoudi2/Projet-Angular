import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { ListSuggestion } from './list-suggestion/list-suggestion.component';

@NgModule({
  declarations: [Header, Footer, ListSuggestion],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [Header, Footer, ListSuggestion],
})
export class CoreModule {}
