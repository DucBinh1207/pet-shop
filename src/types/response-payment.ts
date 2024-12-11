export type ResponsePayment = {
  returnCode: number;
  returnMessage: string;
  subReturnCode: number;
  subReturnMessage: string;
  zpTransToken: string;
  orderUrl: string;
  orderToken: string;
  qrCode: string;
};
