import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/Home.module.css'


type Props = {
    title: string,
    description: string,
    gameLink: string,
    gameLinkTitle: string,
    imgLink: string,
    shareLink: string,
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const OneCard = (props: Props) => {
  const classes = useStyles();

  return (
    <>
    <Card>
      <div>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imgLink}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container spacing={3} >
          <Grid item>
            <CardActions>
              <Button href={props.gameLink} className={styles.buttonElem} variant='outlined' size="small" color="primary">
                {props.gameLinkTitle}
              </Button>
            </CardActions>
          </Grid>
          <Grid item>
            <CardActions>
              <Button href={props.shareLink} variant='outlined' size="small" color="primary">
                Twitterで共有！
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </div>
    </Card>
    <div className={styles.spacer_medium} />
    </>
  );
}

export default OneCard;