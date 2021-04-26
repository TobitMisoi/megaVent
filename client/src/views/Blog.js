import { makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import BlogFetch from '../functions/BlogFetch'

const styles = {
  container: {
    border: '1px solid',
    padding: '1rem'
  }
}

const useStyles = makeStyles(styles)

export function Blog() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <BlogFetch />
    </div>
  )
}

export default Blog
