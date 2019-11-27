export enum SnackBarEnum {
  info,
  error,
}

export interface Card {
  type: SnackBarEnum;
  text: string;
  date: Date;
}
