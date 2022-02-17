import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

const Custon404: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default Custon404;
