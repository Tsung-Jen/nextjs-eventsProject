import Link from "next/link";

import classes from "./Button.module.css";

function Button(props) {
  if (props.link) { // check whether the Button has a property link
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
