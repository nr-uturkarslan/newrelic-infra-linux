import React from "react";
import { HeadingText, BlockText, Grid, GridItem, ChartGroup } from "nr1";

import ContainerLogsTable from "./components/ContainerLogsTable";

const ACCOUNT_ID = "<YOUR_ACCOUNT_ID>";

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div>
        <Grid className="wrapper">
          <GridItem columnSpan={12}>
            <HeadingText>Custom Linux Infra Container Logs</HeadingText>
          </GridItem>
          <GridItem columnSpan={12}>
            <hr />
          </GridItem>
          <GridItem columnSpan={12}>
            <BlockText>
              This custom dashboard is meant to provide a view to container logs
              on a Linux machine.
            </BlockText>
            <br />
          </GridItem>
          <GridItem columnSpan={12}>
            <hr />
          </GridItem>
          <GridItem columnSpan={12}>
            <ContainerLogsTable
              accountId={ACCOUNT_ID}
            />
          </GridItem>
          <GridItem columnSpan={12}>
            <hr />
          </GridItem>
        </Grid>
      </div>
    );
  }
}
