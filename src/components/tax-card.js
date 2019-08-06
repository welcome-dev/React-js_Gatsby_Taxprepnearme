import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '4rem 0.1rem'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
})

function TaxCard(props) {
  const tax = props.tax
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  console.log(tax)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="h4"
          className={classes.title}
          gutterBottom
        >
          { tax.name.S }
        </Typography>

        <Typography
          className={classes.pos}
          variant="h6"
          component="p">
          { tax.address.S }
        </Typography>


        <Typography
          className={classes.pos}
          variant="h6"
          color="textSecondary">
          { tax.phone.S }
        </Typography>

        <Typography
          className={classes.pos}
          color="textSecondary"
          variant="h6">
          { tax.website.S }
        </Typography>

        <Typography variant="h6">
          { tax.city.S }
          &nbsp;
          {bull}
          &nbsp;
          { tax.state.S }
        </Typography>
      </CardContent>
    </Card>
  )
}

TaxCard.propTypes = {
  tax: PropTypes.object.isRequired
}

TaxCard.defaultProps = {
  tax: {}
}

export default TaxCard
