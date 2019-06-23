import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./listStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "../TabContent/TabContent";
import ListItem from "../ListItem/ListItem";

const List = ({ listTitle, showTabs, date, exTasks }) => {
  const {
    title,
    taskTab,
    taskCreator,
    dateSubtitle,
    completedTitle,
    dashedLines,
    completedSection
  } = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [list, addNewTask] = useState();

  const handleTabSelection = (e, selectedTab) => {
    setSelectedTab(selectedTab);
  };

  const createTask = name => {
    //logic to add a new task would go here
    // addNewTask( { name } );
  };

  return (
    <Grid item>
      <div className={title}>
        <Typography variant={"h5"}>{listTitle}</Typography>
        <Typography variant={"h6"} className={dateSubtitle}>
          {date && date}
        </Typography>
      </div>
      {showTabs && (
        <Tabs value={selectedTab} onChange={handleTabSelection}>
          <Tab label="All" className={taskTab} />
          <Tab className={taskTab} label="Projects" />
        </Tabs>
      )}
      {selectedTab === 0 && (
        <Grid item>
          <TabContent>
            <Button component="div" className={taskCreator} onClick={createTask}>
              +Create Task
                        </Button>
            {exTasks &&
              exTasks.map((task, idx) => {
                return <ListItem key={idx} taskName={task.name} scheduledAt={task.scheduledAt} />;
              })}
          </TabContent>
          {listTitle === "Today" && (
            <section className={completedSection}>
              <h2 className={dashedLines}></h2>
              <span className={completedTitle}>Completed</span>
              <h2 className={dashedLines}></h2>
            </section>
          )}
        </Grid>
      )}

      {selectedTab === 1 && <TabContent>Projects would go here...</TabContent>}
    </Grid>
  );
};

export default List;
