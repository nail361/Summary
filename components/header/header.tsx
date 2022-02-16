import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./header.module.scss";

const Header: FunctionComponent = () => {
  const router = useRouter();

  return (
    <header>
      <div className={classes.header}>
        <Link href="/">
          <a
            className={`${classes.link} ${
              router.pathname == "/" ? classes.activeLink : ""
            }`}
          >
            Главная
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${classes.link} ${
              router.pathname == "/about" ? classes.activeLink : ""
            }`}
          >
            Обо мне
          </a>
        </Link>
        <Link href="/javascript">
          <a
            className={`${classes.link} ${
              router.pathname == "/javascript" ? classes.activeLink : ""
            }`}
          >
            JavaScript
          </a>
        </Link>
        <Link href="/react">
          <a
            className={`${classes.link} ${
              router.pathname == "/react" ? classes.activeLink : ""
            }`}
          >
            ReactJS
          </a>
        </Link>
        <Link href="/more">
          <a
            className={`${classes.link} ${
              router.pathname == "/more" ? classes.activeLink : ""
            }`}
          >
            Разное
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
