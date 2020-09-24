import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../types';

const times = 10_000;

console.log(header('Венец Героя +0 => +3'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_3, times));
console.log(header('Венец Героя +0 => +4'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_4, times));
console.log(header('Венец Героя +0 => +5'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_5, times));
console.log(header('Венец Героя +0 => +6'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_6, times));
console.log(header('Венец Героя +0 => +7'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_7, times));
console.log(header('Венец Героя +0 => +8'));
console.log(enchant(Item.HeroCrown, Item.HeroCrown_8, times));
