import React from "react";
import "../App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryAxis,
} from "victory";

function Students(props) {
  return (
    <div>
      <h2>Here you can find the of the ratings of: {props.name} </h2>
      <div className="legenda">
        <span className="dot-2"></span>
        <span>Difficulty</span>
        <span className="dot-1"></span>
        <span>Enjoyment</span>
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
        <VictoryGroup
          offset={5}
          style={{ data: { width: 4 } }}
          colorScale={["red", "lime"]}
        >
          <VictoryBar
            data={props.individualDataDifficulty}
            x="x"
            y="y"
            style={{ data: { fill: "red" } }}
          />
          <VictoryBar data={props.individualDataFunFactor} x="x" y="y" />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Students;
