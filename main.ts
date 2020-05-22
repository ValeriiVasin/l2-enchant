import { Item } from './types';
import { enchant } from './helpers/enchant';

console.log('Плащ +0 => +5');
console.log(enchant(Item.Cloak, Item.Cloak_5));

console.log('Талик Адена +0 => +7');
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_7));

console.log('Талик Евы +0 => +4');
console.log(enchant(Item.TalismanOfEva, Item.TalismanOfEva_4));

console.log('Подвеска Дракона Ур.1 +0 => +5');
console.log(enchant(Item.DragonPendantOne, Item.DragonPendantOne_5));

console.log('Подвеска Дракона Ур.2 +0 => +5');
console.log(enchant(Item.DragonPendantTwo, Item.DragonPendantTwo_5));

console.log('Подвеска Дракона Ур.3 +0 => +3');
console.log(enchant(Item.DragonPendantThree, Item.DragonPendantThree_3));
