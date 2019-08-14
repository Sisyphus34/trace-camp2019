import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ResultsTab from "components/Results/ResultsTab";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function ListView(props) {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <div className={classes.demo}>
        <List>
          {
            <ListItem>
              <ListItemAvatar>
                <IconButton
                  color="secondary"
                  edge="end"
                  aria-label="description"
                  value={secondary}
                  onClick={(event) => {
                    console.log(props.children)
                    setSecondary((secondary) => !secondary);
                  }}>
                
                  <DescriptionIcon />
                </IconButton>
              </ListItemAvatar>
              <ListItemText
                primary={props.children.Name}
                secondary={secondary ? props.children.wTeaser : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="favorite">
                  <FavoriteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          }
        </List>
      </div>
    </div>
  );
}
