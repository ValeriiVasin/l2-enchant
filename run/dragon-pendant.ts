import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../items';

(function one() {
  const enchants: Array<[number, Item]> = [
    [1, Item.DragonPendantOne_1],
    [2, Item.DragonPendantOne_2],
    [3, Item.DragonPendantOne_3],
    [4, Item.DragonPendantOne_4],
    [5, Item.DragonPendantOne_5],
  ];

  console.log();
  console.log(header('Подвеска Дракона Ур.1'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Подвеска Дракона Ур.1 +0 => +${lvl}`,
      enchant(Item.DragonPendantOne, item, 1000),
    );
  }
})();

(function two() {
  const enchants: Array<[number, Item]> = [
    [1, Item.DragonPendantTwo_1],
    [2, Item.DragonPendantTwo_2],
    [3, Item.DragonPendantTwo_3],
    [4, Item.DragonPendantTwo_4],
    [5, Item.DragonPendantTwo_5],
  ];

  console.log();
  console.log(header('Подвеска Дракона Ур.2'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Подвеска Дракона Ур.2 +0 => +${lvl}`,
      enchant(Item.DragonPendantTwo, item, 1000),
    );
  }
})();

(function three() {
  const enchants: Array<[number, Item]> = [
    [1, Item.DragonPendantThree_1],
    [2, Item.DragonPendantThree_2],
    [3, Item.DragonPendantThree_3],
    [4, Item.DragonPendantThree_4],
    [5, Item.DragonPendantThree_5],
  ];

  console.log();
  console.log(header('Подвеска Дракона Ур.3'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Подвеска Дракона Ур.3 +0 => +${lvl}`,
      enchant(Item.DragonPendantThree, item, 1000),
    );
  }
})();
