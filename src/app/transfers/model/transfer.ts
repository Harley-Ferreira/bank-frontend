export interface Transfer {
  _id: number;
  originAccount: number;
  destinationAccount: number;
  transferValue: number;
  transferDate: string;
  schedulingDate: string;
}
