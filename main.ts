import { Item } from './types';
import { enchant } from './helpers/enchant';

console.log('Плащ +0 => +5');
console.log(enchant(Item.Cloak, Item.Cloak_5));

console.log('Талик Адена +0 => +7');
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_7));
