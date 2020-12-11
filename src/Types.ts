export interface Question {
  description?: string;
  question?: string | any;
  answer?: string | string[];
  followUpQuestion?: Question;
}

export interface Challenge {
  description: string;
}

export interface Data {
  questions: Question[];
}

export interface QuestionBlockProps extends Question {
  id?: number | string;
  state?: string;
  onClick?: any;
  onClose?: any;
}
