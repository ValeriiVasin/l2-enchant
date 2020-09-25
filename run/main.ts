import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../items';

console.log(header('Плащи'));
console.log('Плащ +0 => +5');
console.log(enchant(Item.Cloak, Item.Cloak_5));

console.log(header('Талисманы Адена / Евы'));
console.log('Талик Адена +0 => +7');
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_7));

console.log('Талик Евы +0 => +4');
console.log(enchant(Item.TalismanOfEva, Item.TalismanOfEva_4));

console.log(header('Подвеска Дракона'));
console.log('Подвеска Дракона Ур.1 +0 => +5');
console.log(enchant(Item.DragonPendantOne, Item.DragonPendantOne_5));

console.log('Подвеска Дракона Ур.2 +0 => +5');
console.log(enchant(Item.DragonPendantTwo, Item.DragonPendantTwo_5));

console.log('Подвеска Дракона Ур.3 +0 => +3');
console.log(enchant(Item.DragonPendantThree, Item.DragonPendantThree_3));

console.log(header('Талисман Властителя'));
console.log('Талисман Властителя Ур.1 => Ур.5');
console.log(enchant(Item.TalismanOfAuthority_1, Item.TalismanOfAuthority_5));
console.log('Талисман Благородного Властителя Ур.1 => Ур.5');
console.log(
  enchant(Item.NobleTalismanOfAuthority_1, Item.NobleTalismanOfAuthority_5)
);
console.log('Искрящийся Талисман Властителя Ур.1 => Ур.5');
console.log(
  enchant(Item.RadiantTalismanOfAuthority_1, Item.RadiantTalismanOfAuthority_5)
);

console.log(header('Руны'));
console.log('Руна Ур.1 => Ур.6');
console.log(enchant(Item.Rune_1, Item.Rune_6));
console.log('Руна Ур.1 => Ур.8');
console.log(enchant(Item.Rune_1, Item.Rune_8));
console.log('Руна Ур.1 => Ур.10');
console.log(enchant(Item.Rune_1, Item.Rune_10));
console.log('Руна Ур.1 => Ур.13');
console.log(enchant(Item.Rune_1, Item.Rune_13));
