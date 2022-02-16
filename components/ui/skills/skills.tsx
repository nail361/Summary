import { FunctionComponent } from "react";
import classes from "./skills.module.scss";

interface SkillsProps {
  exp: number;
}

const Skills: FunctionComponent<SkillsProps> = (props) => {
  const { exp } = props;

  let expNodes = [];

  for (let i: number = 1; i <= 5; i++) {
    expNodes.push(
      <span
        key={i}
        className={`${classes.line} ${exp >= i ? classes.active : ""}`}
      />
    );
  }

  return <div className={classes.lines}>{expNodes}</div>;
};

export default Skills;
