import { FunctionComponent, SyntheticEvent, useState } from "react";
import Head from "next/head";
import EcmaScript from "../../components/javascript/ecmascript/ecmascript";
import Solid from "../../components/javascript/solid/solid";
import KissDryEtc from "../../components/javascript/kissdryetc/kissdryetc";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import classes from "./javascript.module.scss";
import Closure from "../../components/javascript/closure/closure";
import EventLoop from "../../components/javascript/eventloop/eventloop";
import More from "../../components/javascript/more/more";
import Sorting from "../../components/javascript/sorting/sorting";

const JS: FunctionComponent = () => {
  const [expanded, setExpanded] = useState("");

  const onAccordionChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };

  const components = [
    {
      title: "ECMAScript",
      component: <EcmaScript />,
    },
    {
      title: "SOLID",
      component: <Solid />,
    },
    {
      title: "Принципы разработки: KISS, DRY, YAGNI, BDUF, APO",
      component: <KissDryEtc />,
    },
    {
      title: "Замыкание (closure)",
      component: <Closure />,
    },
    {
      title: "Цикл событий (event loop)",
      component: <EventLoop />,
    },
    {
      title: "Разное",
      component: <More />,
    },
    {
      title: "Сортировка",
      component: <Sorting />,
    },
  ];

  return (
    <>
      <Head>
        <title>JavaScript</title>
      </Head>
      <div className={classes.main}>
        <div className={classes.description}>
          В данном разделе собраны мои ключевые навыки и знания по JavaScript и
          программированию. В него вошло только то, о чём чаще всего спрашивают
          на собеседованиях + то, что я считаю важными.
        </div>
        <div>
          {components.map((component) => (
            <Accordion
              key={component.title}
              expanded={expanded === component.title}
              onChange={onAccordionChange(component.title)}
            >
              <AccordionSummary
                id={`${component.title}-header`}
                aria-controls={`${component.title}-content`}
                expandIcon={<ExpandMoreIcon />}
                className={classes.accorionTitle}
              >
                {component.title}
              </AccordionSummary>
              <AccordionDetails>{component.component}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default JS;
