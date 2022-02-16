import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

import classes from "./index.module.scss";

const Welcome: NextPage = () => {
  const { t } = useTranslation("welcome-page");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.welcomeBlock}>
          <div className={classes.titleWrapper}>
            <h1>{t("hi")}</h1>
          </div>
          <div className={classes.photoArea}>
            <div className={classes.photoWrapper}>
              <Image
                src="/imgs/photo.png"
                alt="photo"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
        <div className={classes.infoBlock}>
          <p>{t("info.p1")}</p>
          <p>{t("info.p2")}</p>
          <p>{t("info.p3")}</p>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["welcome-page"])),
    },
    revalidate: 10,
  };
};

export default Welcome;
