import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { CardProps, Character } from './character';

export class Slime extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.SLIME],
      characterType: CharacterType.SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.SLIME],
      onTakeDamage,
    });
  }

  acquireCardFromOtherCharacter(character: Character) {
    const otherCharacterCard = character.getRandomCard();

    if (!otherCharacterCard) return;

    this.acquireCard(otherCharacterCard);
  }
}
