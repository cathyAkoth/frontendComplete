import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@material-ui/core";

const CustomCard = (props) => {
  const { cardIcon, title, link, className, desc } = props;

  return (
    <Link to={link}>
      <div className="card">
        <Card className={className}>
          <CardActionArea>
            <CardMedia
              component="img"
              className="media"
              image={cardIcon}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2">{desc}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
};

export default CustomCard;
