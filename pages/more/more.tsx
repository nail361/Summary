import { FunctionComponent } from "react";
import Head from "next/head";

import classes from "./more.module.scss";

const More: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>More</title>
      </Head>
      <div className={classes.main}>
        <div className={classes.description}>
          В данном разделе собраны мои ключевые навыки и знания по JavaScript и
          программированию. В него вошло только то, о чём чаще всего спрашивают
          на собеседованиях + то, что я считаю важными.
        </div>
        <div>BigO</div>
      </div>
    </>
  );
};

export default More;
