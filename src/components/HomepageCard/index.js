import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HomepageCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={[clsx('col col--4'), "qf-homepage-card"]}>
      <CardMedia
        component="img"
        image={props.url}
        alt="Paella dish"
        className={[styles.featureSvg, "qf-homepage-card-media"]}
      />
      {props.links.length > 4 ? 
      <CardActions  className={"qf-homepage-card-actions"} disableSpacing>
        <ExpandMore
          sx={{marginRight: "auto"}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{color: "var(--ifm-color-base)"}}/>
        </ExpandMore>
      </CardActions>
      : <></>}
      <Collapse in={expanded} className={"qf-homepage-card-collapse"}timeout="auto" collapsedSize={320}>
        <CardContent style={{padding: "20px", paddingBottom: "48px"}}>
          <Typography variant="body2" color="text.primary" className="qf-homepage-card-title">
            {props.title}
          </Typography>
          <Typography paragraph className="qf-homepage-card-description">{props.description}</Typography>
          <ul style={{display:"flex", flexDirection:"column", gap:"12px", padding: 0, margin: 0}}>
          {props.links.map((item,index) => {
            return <li style={{textAlign: "left", listStyleType:"none"}} key={index}><a href={item["url"]} target="_self">{item["title"]}</a></li>
          })}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
