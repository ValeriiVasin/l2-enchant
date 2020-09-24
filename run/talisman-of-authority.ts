import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../types';

(function one() {
  const enchants: Array<[number, Item]> = [
    [2, Item.TalismanOfAuthority_2],
    [3, Item.TalismanOfAuthority_3],
    [4, Item.TalismanOfAuthority_4],
    [5, Item.TalismanOfAuthority_5],
  ];

  console.log();
  console.log(header('Талисман Властителя'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Талисман Властителя Ур.1 => Ур.${lvl}`,
      enchant(Item.TalismanOfAuthority_1, item, 1000)
    );
  }
})();

(function two() {
  const enchants: Array<[number, Item]> = [
    [2, Item.NobleTalismanOfAuthority_2],
    [3, Item.NobleTalismanOfAuthority_3],
    [4, Item.NobleTalismanOfAuthority_4],
    [5, Item.NobleTalismanOfAuthority_5],
  ];

  console.log();
  console.log(header('Талисман Благородного Властителя'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Талисман Благородного Властителя Ур.1 => Ур.${lvl}`,
      enchant(Item.NobleTalismanOfAuthority_1, item, 1000)
    );
  }
})();

(function three() {
  const enchants: Array<[number, Item]> = [
    [2, Item.RadiantTalismanOfAuthority_2],
    [3, Item.RadiantTalismanOfAuthority_3],
    [4, Item.RadiantTalismanOfAuthority_4],
    [5, Item.RadiantTalismanOfAuthority_5],
  ];

  console.log();
  console.log(header('Искрящийся Талисман Властителя'));
  for (const [lvl, item] of enchants) {
    console.log(
      `Искрящийся Талисман Властителя Ур.1 => Ур.${lvl}`,
      enchant(Item.RadiantTalismanOfAuthority_1, item, 1000)
    );
  }
})();
