import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { QuestionsActionTypes, QuestionsActions,
         GetQuestionsAction, GetQuestionsSuccessAction, GetQuestionsFailedAction } from 'src/app/state/actions/questions.action';


@Injectable()
export class QuestionsEffects {

  @Effect() getQuestions$ = this.actions$
  .pipe(
    ofType<GetQuestionsAction>(QuestionsActionTypes.GET_QUESTIONS),
    mergeMap(
      () => this.questionsService.getQuestionsRx()
      .pipe(
        map( data => new GetQuestionsSuccessAction([data]) ),
        catchError(error => of(new GetQuestionsFailedAction(error)) )
      )
    )
  );

  constructor(private actions$: Actions, private questionsService: QuestionsService) {

  }

}
