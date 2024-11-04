import { PHASE_TYPE } from '../constants/game';
import { GameStateData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';

const DAY_SECOND = 180; // 3분
const EVENING_SECOND = 60; // 1분
const END_SECOND = 10; // 10초

export class GameState {
  phaseType;
  nextPhaseAt = 0;
  #roomId;
  #phaseTimer;
  #onPhaseChange;

  constructor() {
    this.phaseType = PHASE_TYPE.NONE;
    this.nextPhaseAt = 0;
  }

  toGameStateData(): MessageProps<GameStateData> {
    return {
      phaseType: this.phaseType,
      nextPhaseAt: this.nextPhaseAt,
    };
  }

  gameStart(roomId, onPhaseChange) {
    this.#roomId = roomId;
    this.#onPhaseChange = onPhaseChange;
    this.#startDay();
  }

  resetTimer() {
    if (this.#phaseTimer) {
      clearTimeout(this.#phaseTimer);
    }
  }

  #startDay() {
    this.phaseType = PHASE_TYPE.DAY;
    this.nextPhaseAt = Date.now() + DAY_SECOND * 1000;
    this.#startPhaseTimer();
  }

  #startEvening() {
    this.phaseType = PHASE_TYPE.EVENING;
    this.nextPhaseAt = Date.now() + EVENING_SECOND * 1000;
    this.#startPhaseTimer();
  }

  #startEnd() {
    this.phaseType = PHASE_TYPE.END;
    this.nextPhaseAt = Date.now() + END_SECOND * 1000;
    this.#startPhaseTimer();
  }

  #startPhaseTimer() {
    if (this.#phaseTimer) {
      clearTimeout(this.#phaseTimer);
    }

    this.#onPhaseChange(this.#roomId, this.phaseType, this.nextPhaseAt);
    this.#phaseTimer = setTimeout(() => {
      switch (this.phaseType) {
        case PHASE_TYPE.DAY:
          this.#startEvening();
          break;
        case PHASE_TYPE.EVENING:
          this.#startEnd();
          break;
        case PHASE_TYPE.END:
          this.#startDay();
          break;
      }
    }, this.nextPhaseAt - Date.now());
  }
}
