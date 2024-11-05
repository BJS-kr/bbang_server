import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardProps, Character } from './character';

export class Knight extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.KNIGHT],
      characterType: CHARACTER_TYPE.KNIGHT,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.KNIGHT],
      roleType: ROLE_TYPE.NONE,
    });
  }

  acquireCardTwice(card1: CardProps, card2: CardProps) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
