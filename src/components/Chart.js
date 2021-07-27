import React from "react"
import withStyles from "react-jss"

const styles = {
  container: {
    width: "100%",
    height: "100vh",
  }
}

const Chart = ({ classes }) => {
  return (
    <div className={classes.container}>
      <svg
        width="100%"
        height="80%"
        preserveAspectRatio="xMidYMid meet"
        style={{ border: "5px solid hotpink" }}
      >
        <rect x="0" y="0" width="100%" height="100%" fill="black" />
        <circle cx="200" cy="200" r="30" fill="red" />
      </svg>
    </div>
  )
}

export default withStyles(styles)(Chart)