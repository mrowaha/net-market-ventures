import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Grow, Collapse, Box } from "@mui/material";
import * as React from "react";

export interface ServiceCardProps extends React.PropsWithChildren{
  icon?: React.ReactNode;
  title?: string;
  grow: boolean;
  growTimeout?: number
}

function ServiceCard(props: ServiceCardProps, ref : any) {

  const [expand, setExpand] = React.useState<boolean>(false);
  const handleExpand = React.useCallback(() => {
    setExpand(prev => !prev);
  }, []);


  return (
    <Grow in={props.grow} {...(props.growTimeout? {timeout: props.growTimeout} : {})}>
      <Paper sx={{
        border: "2px solid #ff3131",
        boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
        marginBlock: "1rem",
        }}
        ref={ref}
      >
        <Card>
          <CardMedia
            sx={{display: "flex", justifyContent: "center"}}
          >
            {props.icon}
          </CardMedia>
          <CardContent>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "4rem"}}>
            <Typography variant="h6" textAlign="center" >
              {props.title}
            </Typography>
            </Box>
            <Collapse in={expand} collapsedSize="200px">
              {props.children}
            </Collapse>
          </CardContent>
          <CardActions sx={{display: "flex", justifyContent: "center"}}>
            <Button
              endIcon={expand ? <ArrowUpward style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px"}} /> : <ArrowDownward  style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px"}} />}
              sx={{textTransform: "none", color: "#ff3131"}}
              onClick={handleExpand}
            >
              Read {!expand ? "More" : "Less"}
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grow>
  )
}

export default React.forwardRef(ServiceCard);