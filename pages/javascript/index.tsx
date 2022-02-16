import { FunctionComponent, useState } from "react";
import Head from "next/head";

import classes from "./javascript.module.scss";

function* counterGenerator() {
  let count = 0;
  while (true) yield ++count;
}
const counter = counterGenerator();

const JS: FunctionComponent = () => {
  //Spread
  const boys = ["Миша", "Максим"];
  const girls = ["Таня", "Маша"];
  const all = [...boys, ...girls];

  //Rest
  const summ = (...rest: number[]) => {
    return rest.reduce((storedSumm, num) => storedSumm + num, 0);
  };
  const summed = summ(1, 2, 3, 4, 5);

  //Destruct
  const car = { type: "седан", price: 100 };
  const { type, price: cost } = car;

  //Template literals
  const name = "Денис";
  const greeting = `Привет ${name}`;

  //Map
  const map = new Map();
  map.set("name", "string");
  map.set(1, "number");
  map.set(false, "boolean");

  //Set
  const set = new Set();
  set.add(map.get("name"));
  set.add(map.get(1));
  set.add(map.get(false));
  set.add(map.get("name"));

  //Generators
  const [counterValue, setCounter] = useState(0);

  const onNextGeneratorIteration = () => {
    setCounter(counter.next().value!);
  };

  return (
    <>
      <Head>
        <title>JavaScript</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.main}>
        <div className={classes.description}>
          В данном разделе собраны мои ключевые навыки и знания по JavaScript. В
          него вошло только то, о чём чаще всего спрашивают на собеседованиях +
          то, что я считаю важными.
        </div>
        <div>
          <h2>ECMAScript</h2>
          <p>Рассмотрим основные фишки последних версий ECMAScript:</p>
          <ul>
            <li>
              <p>let, const, var</p>
              <ul>
                <li>
                  <p>var - всплывает</p>
                  <code>
                    <p>
                      console.log(a); // ошибка, т.к. переменная ещё не
                      инициализирована
                    </p>
                    <p>
                      console.log(b); // ошибка, т.к. переменная ещё не
                      инициализирована
                    </p>
                    <p>console.log(c); // undefined</p>
                    <p>let a = 1;</p>
                    <p>const b = 2;</p>
                    <p> var c = 3;</p>
                  </code>
                </li>
                <li>
                  <p>разные области видимости</p>
                  <code>
                    <p>&#123;</p>
                    <p>&#160;var a = 1;</p>
                    <p>&#160;let b = 2;</p>
                    <p>&#160;const c = 3;</p>
                    <p>&#125;</p>
                    <p>console.log(a); // 1</p>
                    <p>console.log(b); // ошибка, нет доступа к переменной</p>
                    <p>console.log(c); // ошибка, нет доступа к переменной</p>
                  </code>
                </li>
                <li>
                  <p>let и const ограничены блоком</p>
                  <p>
                    const - константа, которую нельзя переопределить после
                    инициализации
                  </p>
                  <code>
                    <p>const a = 1;</p>
                    <p>let b = 2;</p>
                    <p>a = 4; // ошибка</p>
                    <p>b = 4; // OK</p>
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <p>Стрелочная функция</p>
              <ul>
                <li>
                  <p>Проще записываются, сохраняется контекст this</p>
                  <code>
                    <p>this.timer = 0;</p>
                    <p>
                      setInterval( () =&gt; &#123;this.timer++;&#125;, 1000);
                    </p>
                  </code>
                </li>
                <li>
                  <p>
                    return можно опускать, если он является единственным
                    оператором в выражении
                  </p>
                  <code>
                    <p>const summ(a, b) =&gt; a + b </p>
                  </code>
                </li>
                <li>
                  <p>
                    Стрелочные функции не имеют своего объекта arguments, вместо
                    этого можно пользоваться оператором Rest
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>Rest и Spread</p>
              <ul>
                <li>
                  <p>Spread - разделение коллекций на отдельные элементы.</p>
                  <code>
                    <p>const boys = [&apos;Миша&apos;, &apos;Максим&apos;];</p>
                    <p>const girls = [&apos;Таня&apos;, &apos;Маша&apos;];</p>
                    <p>const all = [...boys, ...girls];</p>
                    <p>console.log(all); // [{all.join(", ")}]</p>
                  </code>
                  <p>
                    Часто применяется для копирования массивов или объектов.
                  </p>
                </li>
                <li>
                  <p>Rest - соединение значений в массив.</p>
                  <code>
                    <p>const summ = (...rest) =&gt; &#123;</p>
                    <p>
                      &#160; return rest.reduce((storedSumm, num) =&gt;
                      storedSumm + num, 0);{" "}
                    </p>
                    <p>&#125;</p>
                    <p>console.log(summ(1,2,3,4,5)); // {summed}</p>
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <p>Деструктуризация</p>
              <code>
                <p>
                  const car = &#123; type: &apos;седан&apos;, price: 100 &#125;
                </p>
                <p>const &#123; type, price: cost &#125; = car;</p>
                <p>console.log(type); // {type}</p>
                <p>console.log(cost); // {cost}</p>
              </code>
            </li>
            <li>
              <p>Шаблонные литералы</p>
              <code>
                <p>const name = &apos;Денис&apos;;</p>
                <p>console.log(`Привет $&#123;name&#125;`); // {greeting}</p>
              </code>
            </li>
            <li>
              <p>Коллекции Set, Map, WeackMap и WeackSet</p>
              <ul>
                <li>
                  <p>Map - коллекция записей вида ключ -&gt; значение</p>
                  <p>
                    Ключ - уникален, им может выступать тип string, number или
                    boolean
                  </p>
                  <code>
                    <p>const map = new Map();</p>
                    <p>map.set(&apos;name&apos;, &apos;string&apos;);</p>
                    <p>map.set(1, &apos;number&apos;);</p>
                    <p>map.set(false, &apos;boolean&apos;);</p>
                  </code>
                </li>
                <li>
                  <p>Set - коллекция уникальных значений, без дублирования</p>
                  <code>
                    <p>const set = new Set();</p>
                    <p>set.add(map.get(&apos;name&apos;));</p>
                    <p>set.add(map.get(1));</p>
                    <p>set.add(map.get(false));</p>
                    <p>set.add(map.get(&apos;name&apos;));</p>
                    <p>console.log(set.size); // {set.size}</p>
                  </code>
                </li>
                <li>
                  <p>
                    WeackMap и WeackSet - соответствующие аналоги, с той лишь
                    разницей, что они не препятствуют сборщику мусора удалять
                    свои элементы из памяти, если на них нет внешних ссылок.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                Генераторы - новый вид функций в JS. При выполнении могут
                приостановить своё выполнение, вернуть промежуточное значение и
                продолжить выполнение далее.
              </p>
              <code>
                <p>function* counterGenerator() &#123;</p>
                <p>&#160;let count = 0;</p>
                <p>&#160;while (true) yield ++count;</p>
                <p>&#125;</p>
                <p>onClick() // {counterValue}</p>
              </code>
              <button onClick={onNextGeneratorIteration}>
                Следующая итерация генератора
              </button>
            </li>
            <li>
              <p>Async Awaite</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JS;
