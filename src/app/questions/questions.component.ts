import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
    .subscribe(questions => this.questions = questions);
  }

}
