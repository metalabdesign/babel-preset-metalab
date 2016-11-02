/* eslint-disable no-unused-vars */
import test from '/foo';

const f = (
  a : number,
  b : number
) => a + b;

export default from './src/bar.js';

const createElement = () => ({});
const Foo = () => <div/>;
export const jsx = <Foo/>;

/* eslint no-console: 0 */
if (jsx) {
  console.log(f(1, 2));
} else {
  console.log(9);
}
