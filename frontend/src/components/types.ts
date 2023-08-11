export type Category = {
  id: number;
  name: string;
  color: string;
};

export type BlohType = {
  id: number;
  title: string;
  category: string;
  category_id: string;
  main_img: string;
  description: string;
  body: string;
  creation_date: string;
  author: string;
};

export interface Posts {
  blohs: BlohType[];
  pagination: any;
}

export type HoroscopeType = {
  id: number;
  weather: string;
  mood: string;
  breakfast: string;
  lunch: string;
  supper: string;
  night: string;
  tasks: string;
  advise: string;
  pokrov: string;
};

export type Page = {
  img: string;
  info: string;
};

export interface Dictionary<T> {
  [Key: string]: T;
}
