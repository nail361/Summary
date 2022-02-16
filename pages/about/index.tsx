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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.skillsBlock}>
          <span className={classes.skillsTitle}>{t("skills")}</span>
          <ul className={classes.skillsList}>
            {skills.map((skill: Skill) => {
              return (
                <li key={skill.title} className={classes.skill}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi natus iusto quo! Veniam corporis eaque error neque iste
                odio ad nemo! Modi dolore doloribus distinctio dolor ipsum
                tempore temporibus magni nobis repellendus deserunt totam maxime
                dolores ipsa assumenda libero odio ea aliquam aspernatur, harum
                ipsam accusamus nesciunt deleniti. Explicabo, voluptas
                perspiciatis maxime rem dignissimos sit quis placeat adipisci,
                fuga natus dolore modi aut, deserunt aperiam iste expedita
                praesentium temporibus ex culpa. Cupiditate fugiat adipisci
                illum explicabo, earum magni eveniet mollitia tempore
                repudiandae deleniti possimus nihil provident tempora ea
                perspiciatis error nulla eum cum, rerum dolore debitis suscipit?
                Culpa harum veniam, perspiciatis velit optio repudiandae
                voluptates? Quae quaerat quo voluptates, fugiat, perspiciatis
                sit facilis totam veniam laboriosam nostrum facere placeat,
                repellat excepturi? Id minima error optio alias laboriosam,
                dolorem ad obcaecati minus voluptatem cum impedit saepe dicta
                qui assumenda mollitia? Repudiandae ratione recusandae illum et
                corporis distinctio eligendi vero architecto laboriosam dolore.
                Cupiditate ut error sunt cumque earum dignissimos placeat soluta
                quo dolorum in exercitationem, facere provident quae laudantium
                eveniet repellat nemo! Pariatur assumenda quae a, praesentium
                optio dolores natus beatae necessitatibus odio voluptatem
                veritatis ducimus facilis vel incidunt illo, iusto perferendis.
                Debitis, quas eius et illo molestiae consequuntur id.
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
    "https://resume-d59bc-default-rtdb.firebaseio.com/skills.json"
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
