import React from "react";

import { VictoryPie } from "victory-pie-native";

export default (props) => ([
  <VictoryPie
    animate={{
      duration: 500,
      onLoad: {
        duration: 500
      }
    }}
    {...props}
  />
]);
