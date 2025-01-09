import type {OkResponse} from "@/stores/game/responses/OkResponse";
import type {ErrorResponse} from "@/stores/game/responses/ErrorResponse";

export type GameResponse = OkResponse | ErrorResponse;
