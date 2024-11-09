import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { Character } from './character';

export class Red extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: ROLE_TYPE; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.RED],
      characterType: CHARACTER_TYPE.RED,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.RED],
      gameEvents,
    });
  }
}
