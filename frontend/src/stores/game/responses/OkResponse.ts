import type {IGameDTD} from "@/stores/game/dtd/IGameDTD";

export class OkResponse {
  status: "ok";
  feedback: IGameDTD;
  time: string;

  constructor(feedback: IGameDTD, time: string) {
    this.status = "ok";
    this.feedback = feedback;
    this.time = time;
  }
}
