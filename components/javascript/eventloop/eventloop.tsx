import { FunctionComponent } from "react";
import Image from "next/image";

const EventLoop: FunctionComponent = () => {
  return (
    <div>
      <p>
        Есть бесконечный цикл, в котором JavaScript ожидает задачи, исполняет их
        и снова ожидает появления новых.
      </p>
      <Image
        src="/imgs/eventloop.png"
        alt="eventloop"
        width="734"
        height="689"
      />
      <p>
        <b>Heap(куча)</b> - просто неструктурированная область памяти.
      </p>
      <p>
        <b>Stack(стек)</b> - место, где задачи выполняются.
      </p>
      <p>Задачи, которые попали в стек выполняются по принципу FIFO.</p>
      <p>
        <b>Callback queue(очередь)</b> - очередь задач.
      </p>
      <p>
        Когда стек полностью освобождается, самая первая задача извлекается из
        очереди и обрабатывается.
      </p>
      <p>
        <b>Web APIs(api браузера)</b> - такие события как клик, таймер, http
        запрос и т.д. являются асинхронными и выполняются посредством api
        браузера, который сам в нужный момент добавляет задачу в очередь
        событий.
      </p>
      <p>
        Лучшей демонстрацией цикла событий JavaScript является пример ниже,
        созданный программистом по имени Philip Roberts:
      </p>
      <iframe
        src="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"
        frameBorder="0"
        width="100%"
        height="500px"
      />
      <p>И конечно, как же без любимого всеми примера с setTimeout</p>
      <code>
        <p>console.log(1);</p>
        <p>setTimeout(()=&gt;console.log(2), 0);</p>
        <p>console.log(3);</p>
        <p>// 1</p>
        <p>// 3</p>
        <p>// 2</p>
      </code>
      <p>
        Вся суть в том, что setTimeout попадает в webApi секцию, и только потом
        в queue, в то время как остальной код выполняется сразу.
      </p>
    </div>
  );
};

export default EventLoop;
