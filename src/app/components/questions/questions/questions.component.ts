import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { IQuestion } from 'src/app/models/question.model';
import { Observable } from 'rxjs';
import { GetQuestionsAction } from 'src/app/state/actions/questions.action';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionsResponse$;
  public ScenarioId = '';

  public questionsRx$: Observable<any>;

  constructor(private store: Store<AppState>, private questionsService: QuestionsService) { }

  ngOnInit() {

    this.onClickBtnGetQuestions();

    this.store.dispatch(new GetQuestionsAction());

    this.questionsRx$ = this.store.select( store => store.questions );

  }

  onClickBtnGetQuestions(): void {

    this.store.dispatch(new GetQuestionsAction());

    this.questionsResponse$ = this.questionsService.getQuestions();
    //console.log('component');
    //console.log(this.questionsResponse$);

  }

  onClickBtnAnswers(){
    let data = {
      "scenario_id": "69588a89-e3e8-412a-9516-226f25de713a",
      "answers": [
        { "inks": ["VN1348", "FW4037"] },
        { "inks": ["AB9312", "OP1002"] },
        { "inks": ["JA6615"] }
      ]
    }

    this.questionsService.postAnswers(data);

  }

}
