import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardProps, Character } from './character';

export class Dino extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.DINO],
      characterType: CHARACTER_TYPE.DINO,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.DINO],
      roleType: ROLE_TYPE.NONE,
      position: { x: 0, y: 0 },
    });
  }

  recoverByLoseTwoCards(card1: CardProps, card2: CardProps) {
    if ((this.handCards.get(card1.type) ?? 0) < 1 || (this.handCards.get(card2.type) ?? 0) < 1) {
      return;
    }

    this.loseCard(card1);
    this.loseCard(card2);
    Character.recover(1, this);
  }
}
