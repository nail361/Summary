import { FunctionComponent } from "react";

const Closure: FunctionComponent = () => {
  const name = "Денис";
  const hi = "Здравствуй, ";

  const welcome = () => {
    const hi = "Привет, ";
    return hi + name;
  };

  return (
    <div>
      <p>
        Замыкание – это функция или блок кода, который запоминает свои внешние
        переменные и может получить к ним доступ. В JavaScript, все функции и
        блоки кода являются замыканиями.
      </p>
      <code>
        <p>const name = &apos;Денис&apos;;</p>
        <p>const hi = &apos;Здравствуй, &apos;;</p>
        <p>function welcome() &#123; [[Environment]]</p>
        <p>&#160;[[LexicalEnvironment]]</p>
        <p>&#160;const hi = &apos;Привет, &apos;;</p>
        <p>&#160;const someVar = &apos;внутренняя переменная&apos;;</p>
        <p>&#160;return hi + name;</p>
        <p>&#125;</p>
        <p>console.log(welcome()); // {welcome()}</p>
        <p>console.log(hi + name); // {hi + name}</p>
        <p>console.log(someVar); // Ошибка, переменная someVar не определена</p>
      </code>
      <p>
        Функция имеет доступ к внешним переменным (scope), что является её
        внешним окружением (Enviroment).
      </p>
      <p>Также у неё есть своё внутреннее окружение (LexicalEnvironment).</p>
      <p>К данным окружениям программист не имеет прямого доступа из кода.</p>
      <p>
        В конкретном примере функция сначала ищет name в своём внутреннем
        окружении, и, не найдя его, идёт дальше вверх по иерархии окружений,
        пока не найдёт.
      </p>
      <p>
        Соответственно hi находится в своём внутреннем окружении и берётся
        оттуда.
      </p>
      <p>И наоборот, мы не можем получить доступ к внутреннему окружению.</p>
    </div>
  );
};

export default Closure;
