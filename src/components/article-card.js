import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '4rem 0.1rem'
  }
})

function ArticleCard(props) {
  const classes = useStyles()
  const article = props.article

  return (
    <Card className={classes.card}>
      <CardContent style={{paddingTop: '24px'}}>
        <Link
          to={article.fields.slug}
          style={{textDecoration: 'none', color: 'inherit'}}>
          {article.frontmatter.title}
        </Link>
      </CardContent>
    </Card>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
}

ArticleCard.defaultProps = {
  article: {}
}

export default ArticleCard
