import React from "react";
import "../App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryAxis,
} from "victory";

function Overview(props) {
  return (
    <div>
      <h2>
        Here you can find the average of the ratings of all the students in a
        bar chart{" "}
      </h2>
      <div className="legenda">
        <span className="dot-2"></span>
        <span> Average difficulty</span>
        <span className="dot-1"></span>
        <span>Average enjoyment</span>
      </div>
      <VictoryChart
        theme={VictoryTheme.material}
        width={900}
        height={350}
        domainPadding={8}
      >
        <VictoryAxis
          fixLabelOverlap
          style={{
            tickLabels: {
              padding: 1.5,
              fontSize: 4,
              angle: 50,
              fontWeight: "bold",
            },
          }}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup offset={5} style={{ data: { width: 4 } }}>
          <VictoryBar
            data={props.averageDifficulty}
            x="x"
            y="y"
            style={{ data: { fill: "red" } }}
          />
          <VictoryBar
            data={props.averageFunFactor}
            x="x"
            y="y"
            style={{ data: { fill: "lime" } }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Overview;
