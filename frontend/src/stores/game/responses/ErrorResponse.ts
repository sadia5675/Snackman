export class ErrorResponse {
  status: "error";
  feedback: string;
  time: string;

  constructor(feedback: string, time: string) {
    this.status = "error";
    this.feedback = feedback;
    this.time = time;
  }
}
