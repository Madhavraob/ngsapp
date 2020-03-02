import { Component, OnInit } from '@angular/core';
import { TwosrvService } from '../twosrv.service';
import { Store, select } from '@ngrx/store';
import ToDoState from '../store/reducers/two.state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../store/actions/two.action';
import { dealsChildSelctor, dealSelector } from '../store/reducers/two.reducer'

@Component({
  selector: 'app-twocomp',
  templateUrl: './twocomp.component.html',
  styleUrls: ['./twocomp.component.css']
})
export class TwocompComponent implements OnInit {

  public data: any;
  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  ToDoList = {};


  // constructor(private twosrvService: TwosrvService) { }
  constructor(private store: Store<ToDoState>) {
    this.todo$ = store.pipe(select(dealSelector));
  }

  ngOnInit() {
    // this.twosrvService.getToDos().subscribe((res) => {
    //   this.data = res;
    // })

    this.ToDoSubscription = this.todo$
      .pipe(
        map(x => {
          debugger
          if (x)
            this.ToDoList = x;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

}
// https://github.com/Madhavraob/ngsapp.git