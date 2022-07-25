import { FunctionComponent } from "react";

const KissDryEtc: FunctionComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <p>
            <b>KISS</b> - Keep It Simple, Stupid / Будь проще
          </p>
          <p>
            Этот принцип гласит, что простые системы будут работать лучше и
            надежнее. Не нужно придумывать задаче более сложного решения, чем ей
            требуется. Стараться использовать библиотеки, только если они
            действительно нужны
          </p>
        </li>
        <li>
          <p>
            <b>DRY</b> - Don’t Repeat Yourself / Не повторяйтесь
          </p>
          <p>
            Нужно писать переиспользуемый код, без дублирования. Перед
            добавлением нового функционала осмотреться, возможно это уже
            реализовано.
          </p>
        </li>
        <li>
          <p>
            <b>YAGNI</b> - You Aren’t Gonna Need It / Вам это не понадобится
          </p>
          <p>
            Необходимо писать только то, что понадобится. Не пишите код, если
            думаете, что он пригодится позже. При рефакторинге не нужно
            стесняться удалять ненужные части кода, в любом случае его можно
            воссатнвоить из git.
          </p>
        </li>
        <li>
          <p>
            <b>BDUF</b> - Big Design Up Front / Глобальное проектирование прежде
            всего
          </p>
          <p>
            Прежде чем переходить к реализации, убедитесь, что все хорошо
            продумано. Многие разработчики считают, что если они не пишут код,
            то они не добиваются прогресса. Это неверный подход. Составив план,
            вы избавите себя от необходимости раз за разом начинать с нуля.
          </p>
        </li>
        <li>
          <p>
            <b>APO</b> - Avoid Premature Optimization / Избегайте
            преждевременной оптимизации
          </p>
          <p>
            Не оптимизировать раньше времени. Преждевременная оптимизация может
            привести к задержкам в коде и, следовательно, увеличит затраты
            времени на вывод продукта на рынок.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KissDryEtc;