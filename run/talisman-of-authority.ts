import { header } from '../helpers/header';
import { run } from '../helpers/run';
import { Item } from '../items';

const times = 10_000;

console.log();
console.log(header('Талисман Властителя'));
run(
  Item.TalismanOfAuthority_1,
  [
    Item.TalismanOfAuthority_2,
    Item.TalismanOfAuthority_3,
    Item.TalismanOfAuthority_4,
    Item.TalismanOfAuthority_5,
    Item.NobleTalismanOfAuthority_1,
  ],
  times,
);

console.log();
console.log(header('Талисман Благородного Властителя'));
run(
  Item.NobleTalismanOfAuthority_1,
  [
    Item.NobleTalismanOfAuthority_2,
    Item.NobleTalismanOfAuthority_3,
    Item.NobleTalismanOfAuthority_4,
    Item.NobleTalismanOfAuthority_5,
    Item.RadiantTalismanOfAuthority_1,
  ],
  times,
);

console.log();
console.log(header('Искрящийся Талисман Властителя'));
run(
  Item.RadiantTalismanOfAuthority_1,
  [
    Item.RadiantTalismanOfAuthority_2,
    Item.RadiantTalismanOfAuthority_3,
    Item.RadiantTalismanOfAuthority_4,
    Item.RadiantTalismanOfAuthority_5,
  ],
  times,
);
