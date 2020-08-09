import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../types';

console.log(header('Венец Героя +0 => +4'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_4, 1000));
console.log(header('Венец Героя +0 => +5'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_5, 1000));
console.log(header('Венец Героя +0 => +6'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_6, 1000));
console.log(header('Венец Героя +0 => +7'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_7, 1000));
console.log(header('Венец Героя +0 => +8'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_8, 1000));
