import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TwoRoutingModule } from './two-routing.module';
import { TwocompComponent } from './twocomp/twocomp.component';
import { TwosrvService } from './twosrv.service';
import { ToDoReducer } from './store/reducers/two.reducer';
import { ToDoEffects } from './store/effects/two.effect';


@NgModule({
  declarations: [TwocompComponent],
  imports: [
    CommonModule,
    TwoRoutingModule,
    StoreModule.forFeature('two', {todos: ToDoReducer}),
    EffectsModule.forFeature([ToDoEffects]),
  ],
  providers: [TwosrvService]
})
export class TwoModule { }
