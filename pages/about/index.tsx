import { FunctionComponent } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import Skills from "../../components/ui/skills/skills";

import classes from "./about.module.scss";

interface AboutProps {
  skills: Skill[];
}

type Skill = {
  id: string;
  title: string;
  exp: number;
};

const About: FunctionComponent<AboutProps> = (props) => {
  const { t } = useTranslation("about");
  const { skills } = props;

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.skillsBlock}>
          <span className={classes.skillsTitle}>{t("skills")}</span>
          <ul className={classes.skillsList}>
            {skills.map((skill: Skill) => {
              return (
                <li
                  data-testid="skill"
                  key={skill.title}
                  className={classes.skill}
                >
                  <span>{skill.title}</span>
                  <Skills exp={skill.exp} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.about}>
          <div className={classes.main}>
            <h1>{t("name")}</h1>
            <p>
              <b>{t("birth")}:</b> 06.01.1991
            </p>
            <p>
              <b>{t("nationality")}:</b> {t("russian")}
            </p>
            <div>
              <b>{t("languages")}:</b>
              <ul className={classes.languagesList}>
                <li>{t("russian")}</li>
                <li>{t("english")}</li>
              </ul>
            </div>
            <div>
              <b>{t("contacts")}: </b>
              <a className={classes.link} href="https://t.me/nail361">
                telegram
              </a>
            </div>
          </div>
          <div className={classes.info}>
            <h1>{t("about")}</h1>
            <div>
              <p>
                Являюсь Frontend разработчиком, претендую на уровень Senior.
                Начинал свой путь с ActionScript 3.0 и разрабатывал flash игры.
                После перешёл на JavaScript.
              </p>
            </div>
          </div>
          <div className={classes.work}>
            <h1>{t("experience")}</h1>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, provident. Ipsa quisquam tempore, amet nostrum
                provident corrupti quas sequi voluptatibus earum ea blanditiis.
                Iste atque alias qui possimus veniam! Fuga?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  const responseData = await fetch(
    "https://summary-cd1a9-default-rtdb.europe-west1.firebasedatabase.app/skills.json"
  )
    .then((response) => response.json())
    .catch(() => []);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
      skills: responseData,
    },
    revalidate: 10,
  };
};

export default About;
