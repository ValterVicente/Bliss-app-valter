import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  questionUrl = 'https://private-anon-718f4d48bf-blissrecruitmentapi.apiary-mock.com/questions';

  /** GET questions from the server */
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl);
  }

}
