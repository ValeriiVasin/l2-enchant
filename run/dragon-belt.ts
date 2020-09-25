import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../items';

const times = 10_000;

console.log(header('Пояс Дракона +0 => +4'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_4, times));
console.log(header('Пояс Дракона +0 => +5'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_5, times));
console.log(header('Пояс Дракона +0 => +6'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_6, times));
console.log(header('Пояс Дракона +0 => +7'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_7, times));
console.log(header('Пояс Дракона +0 => +8'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_8, times));
console.log(header('Пояс Дракона +0 => +9'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_9, times));
console.log(header('Пояс Дракона +0 => +10'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_10, times));
