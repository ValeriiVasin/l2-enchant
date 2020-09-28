import { header } from '../helpers/header';
import { run } from '../helpers/run';
import { Item } from '../items';

console.log(header('Подвеска Дракона Ур.1'));
run(
  Item.DragonPendantOne,
  [
    Item.DragonPendantOne_1,
    Item.DragonPendantOne_2,
    Item.DragonPendantOne_3,
    Item.DragonPendantOne_4,
    Item.DragonPendantOne_5,
  ],
  1000,
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
  ],
  1000,
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
  1000,
);
