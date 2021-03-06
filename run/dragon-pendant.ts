/**
 $ npx ts-node ./run/dragon-pendant.ts
------------------ Подвеска Дракона Ур.1 -------------------
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.1 +1 Map { 'Подвеска Дракона Ур.1' => 1, 'Лак Дракона' => 1 }
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.1 +2 Map { 'Подвеска Дракона Ур.1' => 1, 'Лак Дракона' => 2 }
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.1 +3 Map { 'Подвеска Дракона Ур.1' => 1, 'Лак Дракона' => 4 }
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.1 +4 Map { 'Подвеска Дракона Ур.1' => 1, 'Лак Дракона' => 7 }
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.1 +5 Map { 'Подвеска Дракона Ур.1' => 1, 'Лак Дракона' => 12 }
Подвеска Дракона Ур.1 => Подвеска Дракона Ур.2 Map {
  'Подвеска Дракона Ур.1' => 1,
  'Лак Дракона' => 12,
  'Адена' => 12000000 }

------------------ Подвеска Дракона Ур.2 -------------------
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.2 +1 Map { 'Подвеска Дракона Ур.2' => 1, 'Лак Дракона' => 1 }
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.2 +2 Map { 'Подвеска Дракона Ур.2' => 1, 'Лак Дракона' => 3 }
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.2 +3 Map { 'Подвеска Дракона Ур.2' => 1, 'Лак Дракона' => 5 }
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.2 +4 Map { 'Подвеска Дракона Ур.2' => 1, 'Лак Дракона' => 10 }
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.2 +5 Map { 'Подвеска Дракона Ур.2' => 1, 'Лак Дракона' => 37 }
Подвеска Дракона Ур.2 => Подвеска Дракона Ур.3 Map {
  'Подвеска Дракона Ур.2' => 1,
  'Лак Дракона' => 40,
  'Адена' => 16000000 }

------------------ Подвеска Дракона Ур.3 -------------------
Подвеска Дракона Ур.3 => Подвеска Дракона Ур.3 +1 Map { 'Подвеска Дракона Ур.3' => 1, 'Лак Дракона' => 1 }
Подвеска Дракона Ур.3 => Подвеска Дракона Ур.3 +2 Map { 'Подвеска Дракона Ур.3' => 1, 'Лак Дракона' => 5 }
Подвеска Дракона Ур.3 => Подвеска Дракона Ур.3 +3 Map { 'Подвеска Дракона Ур.3' => 1, 'Лак Дракона' => 20 }
Подвеска Дракона Ур.3 => Подвеска Дракона Ур.3 +4 Map { 'Подвеска Дракона Ур.3' => 1, 'Лак Дракона' => 171 }
Подвеска Дракона Ур.3 => Подвеска Дракона Ур.3 +5 Map { 'Подвеска Дракона Ур.3' => 1, 'Лак Дракона' => 3423 }
 */

import { header } from '../helpers/header';
import { run } from '../helpers/run';
import { Item } from '../items';

const times = 100_000;

console.log(header('Подвеска Дракона Ур.1'));
run(
  Item.DragonPendantOne,
  [
    Item.DragonPendantOne_1,
    Item.DragonPendantOne_2,
    Item.DragonPendantOne_3,
    Item.DragonPendantOne_4,
    Item.DragonPendantOne_5,
    Item.DragonPendantTwo,
  ],
  times,
);

console.log();
console.log(header('Подвеска Дракона Ур.2'));
run(
  Item.DragonPendantTwo,
  [
    Item.DragonPendantTwo_1,
    Item.DragonPendantTwo_2,
    Item.DragonPendantTwo_3,
    Item.DragonPendantTwo_4,
    Item.DragonPendantTwo_5,
    Item.DragonPendantThree,
  ],
  times,
);

console.log();
console.log(header('Подвеска Дракона Ур.3'));
run(
  Item.DragonPendantThree,
  [
    Item.DragonPendantThree_1,
    Item.DragonPendantThree_2,
    Item.DragonPendantThree_3,
    Item.DragonPendantThree_4,
    Item.DragonPendantThree_5,
  ],
  times,
);
