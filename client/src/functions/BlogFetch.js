import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    texAlign: 'center'
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    textDecoration: 'underline',
    opacity: '.9'
  }
}

const useStyles = makeStyles(styles)

function BlogFetch() {
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=event')
      .then((res) => {
        setItems(res.data.hits)
      })
      .catch((err) => console.log(err))
  }, [])

  return items.map((item) => (
    <ul className={classes.wrapper} key={item.objectID}>
      <li className={classes.heading}>{item.title}</li>
      <li>
        <a href={item.url}>
          <img src='https://unsplash.it/100' alt='' />
        </a>
      </li>
      <li>{item.author}</li>
    </ul>
  ))
}

export default BlogFetch
