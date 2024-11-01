import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Mask extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.MASK],
      characterType: CHARACTER_TYPE.MASK,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.MASK],
      position: { x: 0, y: 0 },
    });
  }

  acquireCardsFromDeadCharacter(character: Character) {
    if (character.hp > 0) return;

    for (const [type, count] of character.handCards.entries()) {
      this.acquireCard({ type, count });
    }
  }
}
