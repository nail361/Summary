import { FunctionComponent, useState } from "react";
import { Button } from "@mui/material/";

function* counterGenerator() {
  let count = 0;
  while (true) yield ++count;
}
const counter = counterGenerator();

//Spread
const boys = ["Миша", "Максим"];
const girls = ["Таня", "Маша"];
const all = [...boys, ...girls];

//Rest
export const summ = (...rest: number[]) => {
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

//Destruct assign
let a = 0;
let b = 0;
[a, b] = [1, 2];
let c = 1;
let d = 2;
[c, d] = [d, c];
let e = 0;
let f = 0;
let rest: number[];
[e, f, ...rest] = [1, 2, 3, 4, 5];
let g = 0;
let h = 0;
({ g, h } = { g: 1, h: 2 });

//Decorators
function welcome(fn: any): string {
  return "Hello! " + fn();
}

function initProgramm() {
  return "init programm";
}

const EcmaScript: FunctionComponent = () => {
  //Generators
  const [counterValue, setCounter] = useState(0);

  const onNextGeneratorIteration = () => {
    setCounter(counter.next().value!);
  };

  //Promise
  const [promiseResponse, setPromiseResponse] = useState("");

  const onRunPromise = () => {
    setPromiseResponse("");

    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("Прошла 1 секунда");
      }, 1000);
    });

    promise.then((response) => {
      setPromiseResponse(response);
    });
  };

  //Async Await
  const [asyncResponse, setAsyncResponse] = useState("");

  const onRunAsyncAwaite = async () => {
    const waite = async (): Promise<string> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("Прошла 1 секунда"), 1000);
      });
    };

    const response = await waite();
    setAsyncResponse(response);
  };

  return (
    <>
      <p>Рассмотрим основные фишки последних версий ECMAScript:</p>
      <ul className="clear divided">
        <li>
          <p>
            <b>let, const, var</b>
          </p>
          <ul className="clear">
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
          <p>
            <b>Стрелочная функция</b>
          </p>
          <ul className="clear">
            <li>
              <p>Проще записываются, сохраняется контекст this</p>
              <code>
                <p>this.timer = 0;</p>
                <p>setInterval( () =&gt; this.timer++, 1000);</p>
              </code>
            </li>
            <li>
              <p>
                return можно опускать, если он является единственным оператором
                в выражении
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
          <p>
            <b>Rest и Spread</b>
          </p>
          <ul className="clear">
            <li>
              <p>Spread - разделение коллекций на отдельные элементы.</p>
              <code>
                <p>const boys = [&apos;Миша&apos;, &apos;Максим&apos;];</p>
                <p>const girls = [&apos;Таня&apos;, &apos;Маша&apos;];</p>
                <p>const all = [...boys, ...girls];</p>
                <p>console.log(all); // [{all.join(", ")}]</p>
              </code>
              <p>Часто применяется для копирования массивов или объектов.</p>
            </li>
            <li>
              <p>Rest - соединение значений в массив.</p>
              <code>
                <p>const summ = (...rest) =&gt; &#123;</p>
                <p>
                  &#160;return rest.reduce((storedSumm, num) =&gt; storedSumm +
                  num, 0);{" "}
                </p>
                <p>&#125;</p>
                <p>console.log(summ(1,2,3,4,5)); // {summed}</p>
              </code>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>Деструктуризация</b>
          </p>
          <code>
            <p>const car = &#123; type: &apos;седан&apos;, price: 100 &#125;</p>
            <p>const &#123; type, price: cost &#125; = car;</p>
            <p>console.log(type); // {type}</p>
            <p>console.log(cost); // {cost}</p>
          </code>
        </li>
        <li>
          <p>
            <b>Деструктурирующее присваивание</b>
          </p>
          <code>
            <p>let a, b, rest;</p>
            <p>[a, b] = [1, 2];</p>
            <p>console.log(a); // {a}</p>
            <p>console.log(b); // {b}</p>
            <p>[a, b] = [b, a];</p>
            <p>console.log(a); // {c}</p>
            <p>console.log(b); // {d}</p>
            <p>[a, b, ...rest] = [1, 2, 3, 4, 5];</p>
            <p>console.log(a); // {e}</p>
            <p>console.log(b); // {f}</p>
            <p>console.log(rest); // {rest.join(", ")}</p>
            <p>(&#123;a, b&#125; = &#123;a:1, b:2&#125;);</p>
            <p>console.log(a); // {g}</p>
            <p>console.log(b); // {h}</p>
          </code>
        </li>
        <li>
          <p>
            <b>Шаблонные литералы</b>
          </p>
          <code>
            <p>const name = &apos;Денис&apos;;</p>
            <p>console.log(`Привет $&#123;name&#125;`); // {greeting}</p>
          </code>
        </li>
        <li>
          <p>
            <b>Коллекции Set, Map, WeackMap и WeackSet</b>
          </p>
          <ul className="clear">
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
                разницей, что они не препятствуют сборщику мусора удалять свои
                элементы из памяти, если на них нет внешних ссылок.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>Генераторы</b>
          </p>
          <p>
            Новый вид функций в JS. Умеют приостановить своё выполнение, вернуть
            промежуточное значение и продолжить выполнение далее.
          </p>
          <code>
            <p>function* counterGenerator() &#123;</p>
            <p>&#160;let count = 0;</p>
            <p>&#160;while (true) yield ++count;</p>
            <p>&#125;</p>
            <p>onClick() // {counterValue}</p>
          </code>
          <Button variant="contained" onClick={onNextGeneratorIteration}>
            Следующая итерация генератора
          </Button>
        </li>
        <li>
          <p>
            <b>Async Await</b>
          </p>
          <p>
            Синтаксис для работы с промисами (синтаксический сахар). Промисы в
            свою очередь это отложенные и асинхронные вычисления.
          </p>
          <p>С async await код становится более читаемым.</p>
          <ul className="clear">
            <li>
              <p>Promise - старый вариант:</p>
              <code>
                <p>
                  const promise = new Promise((resolve, reject) =&gt; &#123;
                </p>
                <p>
                  &#160;setTimeout(() =&gt; resolve(&apos;Прошла 1
                  секунда&apos;), 1000);
                </p>
                <p>&#125;</p>
                <p>promise.then((response) =&gt; &#123;</p>
                <p>&#160;console.log(response); // {promiseResponse}</p>
                <p>&#125;);</p>
              </code>
              <Button
                data-testid="promise-btn"
                variant="contained"
                onClick={onRunPromise}
              >
                Запустить промис
              </Button>
            </li>
            <li>
              <p>async await - новый вариант:</p>
              <code>
                <p>async function waite() &#123;</p>
                <p>&#160;return new Promise((resolve) =&gt; &#123;</p>
                <p>
                  &#160;&#160;setTimeout(() =&gt; &apos;Прошла 1 секунда&apos;,
                  1000);
                </p>
                <p>&#160;&#125;);</p>
                <p>&#125;;</p>
                <p>
                  const response = await waite(); // ожидает выполнение промиса
                </p>
                <p>console.log(response); // {asyncResponse}</p>
              </code>
              <Button variant="contained" onClick={onRunAsyncAwaite}>
                Запустить async await
              </Button>
            </li>
            <p>
              Преимущество async await становится заметно при выполнении
              последовательной цепочки асинхронных операций, избавляя код от
              вложенности.
            </p>
          </ul>
        </li>
        <li>
          <p>
            <b>Декораторы</b>
          </p>
          <p>
            Cредство, которое позволяет обернуть одну функцию другой и расширить
            ее возможности. По сути это паттерн &apos;Декоратор&apos;.
          </p>
          <p>
            В простом виде декоратор выглядит как функция, которая принимает в
            себя другую функцию и выполняет её внутри себя, перед этим выполняя
            какую-то логику.
          </p>
          <code>
            <p>function welcome(fn) &#123;</p>
            <p>&#160;return &apos;Hello! &apos; + fn();</p>
            <p>&#125;</p>
            <p>&#160;</p>
            <p>function init() &#123;</p>
            <p>&#160;return &apos;init programm&apos;;</p>
            <p>&#125;</p>
            <p>&#160;</p>
            <p>console.log(welcome(init)); // {welcome(initProgramm)}</p>
          </code>
          <p>
            Существует также вариант использования декоратора с помощью спец.
            символа @. На текущий момент
          </p>
          <code>
            <p>function welcome(fn) &#123;</p>
            <p>&#160;return &apos;Hello! &apos; + fn();</p>
            <p>&#125;</p>
            <p>&#160;</p>
            <p>@log</p>
            <p>function init() &#123;</p>
            <p>&#160;return &apos;init programm&apos;;</p>
            <p>&#125;</p>
            <p>&#160;</p>
            <p>console.log(init()); // Hello! init programm</p>
          </code>
          <p>Можно использовать композицию декораторов.</p>
        </li>
      </ul>
    </>
  );
};

export default EcmaScript;
