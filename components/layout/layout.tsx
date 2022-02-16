import { FunctionComponent } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import classes from "./layout.module.scss";

const Layout: FunctionComponent = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.wrapper}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
