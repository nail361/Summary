import { FunctionComponent } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

import classes from "./solid.module.scss";

const Solid: FunctionComponent = () => {
  return (
    <div>
      <p>
        Принципы SOLID относятся к программированию в целом, но я решил
        разместить их в данном разделе.
      </p>
      <p>
        Наверное это самый популярный вопрос на собеседованиях. Давайте же
        кратко рассмотрим данные принципы:
      </p>
      <ul className="clear divided">
        <li>
          <p>
            <b>S</b> - Single Responsibility Principle (Принцип единственной
            ответственности).
          </p>
          <p>Класс или метод должен решать одну задачу:</p>
          <ul>
            <li>
              <p>
                <IoIosCloseCircle className={classes.iconBad} />
                плохо
              </p>
              <code className="code-wrong">
                <p>function feedCat() &#123;</p>
                <p>&#160;cat.hungry--;</p>
                <p>&#160;feedDog(); // лишнее</p>
                <p>&#125;</p>
              </code>
              <p>
                не очевидное(лишнее) действие в методе покормить кота, также
                кормим собаку
              </p>
            </li>
            <li>
              <p>
                <IoIosCheckmarkCircle className={classes.iconGood} />
                хорошо
              </p>
              <code className="code-good">
                <p>function feedCat() &#123;</p>
                <p>&#160;cat.hungry--;</p>
                <p>&#125;</p>
              </code>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>O</b> - Open-Closed Principle (Принцип открытости-закрытости).
          </p>
          <p>Классы, модули, функции можно расширять, но не модифицировать:</p>
          <ul>
            <li>
              <p>
                <IoIosCloseCircle className={classes.iconBad} />
                плохо
              </p>
              <code className="code-wrong">
                <p>function feedAnimals(animals) &#123;</p>
                <p>&#160;for(int i = 0; i &#60;= animals.length; i++) &#123;</p>
                <p>
                  &#160;&#160;if(animal[i].name == &apos;cat&apos;) feedCat();
                </p>
                <p>
                  &#160;&#160;if(animal[i].name == &apos;dog&apos;) feedDog();
                </p>
                <p>&#160;&#160;... и т.д.</p>
                <p>&#160;&#125;</p>
                <p>&#125;</p>
              </code>
              <p>
                при добавлении нового животного, каждый раз придётся изменять
                метод feedAnimals.
              </p>
            </li>
            <li>
              <p>
                <IoIosCheckmarkCircle className={classes.iconGood} />
                хорошо
              </p>
              <code className="code-good">
                <p>
                  function feedAnimals(animals: Array&#60;Animal&#62;) &#123;
                </p>
                <p>&#160;for(int i = 0; i &#60;= animals.length; i++) &#123;</p>
                <p>&#160;&#160;animal[i].feed();</p>
                <p>&#160;&#125;</p>
                <p>&#125;</p>
              </code>
              <p>
                вместо этого можно привести всех животных к общему интерфейсу, в
                котором есть метод feed.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>L</b> - Liskov Substitution Principle (Принцип подстановки
            Барбары Лисков).
          </p>
          <p>Подклассы должны служить заменой для своих суперклассов:</p>
          <ul>
            <li>
              <p>
                <IoIosCloseCircle className={classes.iconBad} />
                плохо
              </p>
              <code className="code-wrong">
                <p>
                  function feedAnimals(animals: Array&#60;Animal&#62;) &#123;
                </p>
                <p>&#160;for(int i = 0; i &#60;= animals.length; i++) &#123;</p>
                <p>&#160;&#160;if(typeof animal[i] == Cat) animal.feedCat();</p>
                <p>&#160;&#160;if(typeof animal[i] == Dog) animal.feedDog();</p>
                <p>&#160;&#160;... и т.д.</p>
                <p>&#160;&#125;</p>
                <p>&#125;</p>
              </code>
              <p>
                на самом деле тут нарушен и OpenClose и Liskov принципы.
                приходится каждый раз проверять тип объекта, получается мы
                остались зависимы от типа, и суперкласс Animal нам не помогает
              </p>
            </li>
            <li>
              <p>
                <IoIosCheckmarkCircle className={classes.iconGood} />
                хорошо
              </p>
              <code className="code-good">
                <p>
                  function feedAnimals(animals: Array&#60;Animal&#62;) &#123;
                </p>
                <p>&#160;for(int i = 0; i &#60;= animals.length; i++) &#123;</p>
                <p>&#160;&#160;animal[i].feed();</p>
                <p>&#160;&#125;</p>
                <p>&#125;</p>
              </code>
              <p>
                реализация из предыдущего примера подоходит нам для решения
                данной задачи.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>I</b> - Interface Segregation Principle (Принцип разделения
            интерфейса).
          </p>
          <p>Интерфейы должны быть узкоспецилизированными(простыми):</p>
          <ul>
            <li>
              <p>
                <IoIosCloseCircle className={classes.iconBad} />
                плохо
              </p>
              <code className="code-wrong">
                <p> interface Shape &#123;</p>
                <p>&#160;drawCircle(); &#123;</p>
                <p>&#160;drawSquare();</p>
                <p>&#160;drawRectangle();</p>
                <p>&#125;</p>
              </code>
              <p>
                если мы реализуем такой интерфейс классом Circle, то ему
                придётся содежрать в себе реализацию всех методов, даже тех,
                котроые ему не нужны.
              </p>
            </li>
            <li>
              <p>
                <IoIosCheckmarkCircle className={classes.iconGood} />
                хорошо
              </p>
              <code className="code-good">
                <p> interface ICircle &#123;</p>
                <p>&#160;drawCircle(); &#123;</p>
                <p>&#125;</p>
                <p> interface Shape &#123;</p>
                <p>&#160;draw(); &#123;</p>
                <p>&#125;</p>
              </code>
              <p>
                разделим интерфейсы на несколько, чтобы каждый решал свою
                задачу.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <b>D</b> - Dependency Inversion Principle (Принцип инверсии
            зависимостей).
          </p>
          <p>
            Объектом зависимости должна быть абстракция, а не что-то конкретное.
          </p>
          <p>
            Простой пример: если мы используем базу данных, то не нужно
            обращаться к её методам напрямую. Необходимо создать интерфейс,
            через который общаться с базой. В будущем можно легко подменить одну
            базу на другую и не менять весь код.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Solid;
