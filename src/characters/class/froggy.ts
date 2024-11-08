import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { Character } from './character';

export class Froggy extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: ROLE_TYPE; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.FROGGY],
      characterType: CHARACTER_TYPE.FROGGY,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.FROGGY],
      onTakeDamage,
    });
  }
}
