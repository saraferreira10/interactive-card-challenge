export interface Form {
  cardHolder?: string;
  cardNumber?: string;
  expDate?: { month: string; year: string };
  cvc?: string;
}
