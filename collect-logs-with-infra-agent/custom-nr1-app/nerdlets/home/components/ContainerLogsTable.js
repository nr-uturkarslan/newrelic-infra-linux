import React from "react";

import {
  HeadingText,
  PlatformStateContext,
  NrqlQuery,
  TableChart,
  LineChart,
} from "nr1";

// export default class KubernetesClustersList extends React.Component {
//   constructor(props) {
//       super(props);
//   }
//   render() {
//       const versionTotals = {
//           metadata: {
//               id: `totals-${this.props.version}`,
//               name: `Version ${this.props.version}`,
//               columns: ['name', 'count'],
//           },
//           data: [
//               {
//                   name: 'Subscriptions',
//                   count: 0
//               },
//               {
//                   name: 'Page views',
//                   count: 0
//               },
//           ],
//       }
//       return <TableChart data={[versionTotals]} fullWidth />
//   }
// }

// export default class KubernetesClustersList extends React.Component {
//   render() {
//     return (
//       <div>
//         <HeadingText className="chartHeader">
//           Newsletter subscriptions per version
//         </HeadingText>
//         <PlatformStateContext.Consumer>
//           {(platformState) => {
//             return (
//               <NrqlQuery
//                 accountIds={[this.props.accountId]}
//                 query="SELECT count(*) FROM Transaction TIMESERIES"
//                 timeRange={platformState.timeRange}
//                 pollInterval={60000}
//               >
//                 {({ data }) => {
//                   return <LineChart data={data} fullWidth />;
//                 }}
//               </NrqlQuery>
//             );
//           }}
//         </PlatformStateContext.Consumer>
//       </div>
//     );
//   }
// }

export default class KubernetesClustersList extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      tableData: {},
    };
  }

  queryLogs(containerData, timeRange) {
    const containerId = containerData[0].data[0].filePath.split("/")[5];
    console.log(containerId);

    NrqlQuery.query({
      accountIds: [this.props.accountId],
      query: `FROM Log SELECT * WHERE container_id = '${containerId}'`,
      timeRange: timeRange,
      formatType: NrqlQuery.FORMAT_TYPE.CHART,
    }).then(({ data }) => {
      if (data) {
        return data;
      }
      else {
        return {};
      }
    });
  }

  render() {
    return (
      <div>
        <PlatformStateContext.Consumer>
          {(platformState) => {
            return (
              <React.Fragment>
                <HeadingText>Container Logs</HeadingText>
                <NrqlQuery
                  accountIds={[this.props.accountId]}
                  // query="FROM Log SELECT * WHERE container_name LIKE '%random-logger%'"
                  query="FROM Log SELECT uniques(filePath) WHERE filePath LIKE '/var/lib/docker/%'"
                  timeRange={platformState.timeRange}
                  pollInterval={60000}
                  formatType={NrqlQuery.FORMAT_TYPE.CHART}
                >
                  {({ data }) => {
                    if (data) {
                      // console.log(data);

                      let result = this.queryLogs(data, platformState.timeRange);
                      console.log(result);
                      // return <TableChart data={data} fullWidth />;

                      return <h3>Failed!</h3>;
                    } else {
                      return <h3>No data found!</h3>;
                    }
                  }}
                </NrqlQuery>
              </React.Fragment>
            );
          }}
        </PlatformStateContext.Consumer>
      </div>
    );
  }
}

{
  /* <NrqlQuery
                        accountIds={[this.props.accountId]}
                        query={query}
                        timeRange={platformState.timeRange}
                        pollInterval={60000}
                        formatType={NrqlQuery.FORMAT_TYPE.CHART}
                      >
                        {({ data }) => {
                          return <TableChart data={data} fullWidth />;
                        }
                      </NrqlQuery>; */
}
