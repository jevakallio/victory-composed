import React from "react";

import { VictoryBar } from "victory-chart-native";

import { VictoryTooltip } from "victory-core-native";

export default (props) => ([
  <VictoryBar
    style={{
      data: {
        fill: props.seriesColor
      }
    }}
    labels={props.labels ? props.labels : ((d) => d.y)}
    labelComponent={<VictoryTooltip />}
    animate={{
      duration: 500,
      onLoad: {
        duration: 500
      }
    }}
    {...props}
  />
]);
