import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../types';

console.log(header('Пояс Дракона +0 => +4'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_4, 1000));
console.log(header('Пояс Дракона +0 => +5'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_5, 1000));
console.log(header('Пояс Дракона +0 => +6'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_6, 1000));
console.log(header('Пояс Дракона +0 => +7'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_7, 1000));
console.log(header('Пояс Дракона +0 => +8'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_8, 1000));
console.log(header('Пояс Дракона +0 => +9'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_9, 1000));
console.log(header('Пояс Дракона +0 => +10'));
console.log(enchant(Item.DragonBelt, Item.DragonBelt_10, 1000));
