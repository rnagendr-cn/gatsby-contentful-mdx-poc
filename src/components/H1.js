import React from "react"
import withStyles from "react-jss"

const styles = {
  h1: {
    color: "grey",
    fontSize: "10vmin",
    textTransform: "uppercase"
  }
}

const H1 = (props) => {
  return (
    <h1 {...props} className={props.classes.h1}/>
  )
}

export default withStyles(styles)(H1)