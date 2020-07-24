import React from "react";
import averageFunFactor from "../data/averageFunFactor";
import averageDifficulty from "../data/averageDifficulty";
import assignmentNames from "../data/assignmentNames";

import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>
          Here you can find the ratings of all the students, divided in the fun
          factor and difficulty
        </h2>
        <VictoryChart
          theme={VictoryTheme.material}
          width={800}
          height={300}
          domainPadding={10}
        >
          <VictoryGroup
            offset={5}
            style={{ data: { width: 5 } }}
            colorScale={["red", "lime"]}
          >
            <VictoryBar data={averageDifficulty} x="x" y="y" />
            <VictoryBar data={averageFunFactor} x="x" y="y" />
          </VictoryGroup>
        </VictoryChart>
        ;
      </div>
    );
  }
}

export default Home;
