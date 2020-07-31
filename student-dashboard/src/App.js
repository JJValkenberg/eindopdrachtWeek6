import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Students from "./components/Students";
import Overview from "./components/Overview";
import LineChart from "./components/LineChart";
import dataStudents from "./data/dataStudents";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      difficulty: [],
      funFactor: [],
      name: "",
      initialFunFactor: [],
      initialDifficulty: [],
      isCheckedDiff: true,
      isCheckedFun: true,
    };
  }
  //Function to get the average ratings of 'difficulty' and 'enjoyment'
  averageData = () => {
    const funFactor = [];
    const difficulty = [];

    const averageFunCalculator = (arr) => {
      let sums = {},
        counts = {},
        results = [],
        name;
      for (var i = 0; i < arr.length; i++) {
        name = arr[i].assignment;
        if (!(name in sums)) {
          sums[name] = 0;
          counts[name] = 0;
        }
        sums[name] += arr[i].funFactor;
        counts[name]++;
      }

      for (name in sums) {
        results.push({ x: name, y: sums[name] / counts[name] });
      }
      return results;
    };
    const averageFunFactorData = averageFunCalculator(dataStudents);

    averageFunFactorData.forEach((student) => {
      const FunFactorData = {
        x: student.x,
        y: student.y,
      };
      funFactor.push(FunFactorData);
    });

    const averageDifficultyCalculator = (arr) => {
      let sums = {},
        counts = {},
        results = [],
        name;
      for (var i = 0; i < arr.length; i++) {
        name = arr[i].assignment;
        if (!(name in sums)) {
          sums[name] = 0;
          counts[name] = 0;
        }
        sums[name] += arr[i].difficulty;
        counts[name]++;
      }
      for (name in sums) {
        results.push({ x: name, y: sums[name] / counts[name] });
      }
      return results;
    };
    const averageDifficultyData = averageDifficultyCalculator(dataStudents);

    averageDifficultyData.forEach((student) => {
      const difficultyData = {
        x: student.x,
        y: student.y,
      };
      difficulty.push(difficultyData);
    });

    this.setState({
      difficulty: difficulty,
      funFactor: funFactor,
      initialDifficulty: difficulty,
      initialFunFactor: funFactor,
    });
  };

  componentDidMount() {
    this.averageData();
  }
  //Function to get the ratings of the students
  individualDataStudents = (studentName) => {
    const filterByStudentName = dataStudents.filter(
      (student) => student.name === studentName
    );

    const difficulty = [];
    const funFactor = [];
    filterByStudentName.forEach((student) => {
      const individualDataDifficulty = {
        x: student.assignment,
        y: student.difficulty,
      };

      const individualDataFunFactor = {
        x: student.assignment,
        y: student.funFactor,
      };

      difficulty.push(individualDataDifficulty);
      funFactor.push(individualDataFunFactor);
    });
    this.setState({
      difficulty: difficulty,
      funFactor: funFactor,
      name: studentName,
      initialDifficulty: difficulty,
      initialFunFactor: funFactor,
    });
  };
  //To filter difficulty
  handleChangeDifficulty = () => {
    this.setState({
      isCheckedDiff: !this.state.isCheckedDiff,
    });

    this.state.isCheckedDiff
      ? this.setState({ isCheckedDiff: false })
      : this.setState({ isCheckedDiff: true });
    this.setState({
      isCheckedDiff: !this.state.isCheckedDiff,
    });
    this.state.isCheckedDiff
      ? this.setState({
          difficulty: [],
        })
      : this.setState({
          difficulty: this.state.initialDifficulty,
        });
  };
  //To filter funFactor
  handleChangeFunFactor = () => {
    this.setState({
      isCheckedFun: !this.state.isCheckedFun,
    });
    this.state.isCheckedFun
      ? this.setState({ isCheckedFun: false })
      : this.setState({ isCheckedFun: true });
    this.setState({
      isCheckedFun: !this.state.isCheckedFun,
    });
    this.state.isCheckedFun
      ? this.setState({
          funFactor: [],
        })
      : this.setState({
          funFactor: this.state.initialFunFactor,
        });
  };

  render() {
    return (
      <div className="container-totaal">
        <Header />
        <Router>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => this.averageData()}>
                  Overview{" "}
                </Link>
              </li>

              <li>
                <Link to="/LineChart" onClick={() => this.averageData()}>
                  Line chart{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/Aranka"
                  onClick={() => this.individualDataStudents("Aranka")}
                >
                  Aranka{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Evelyn"
                  onClick={() => this.individualDataStudents("Evelyn")}
                >
                  Evelyn{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Floris"
                  onClick={() => this.individualDataStudents("Floris")}
                >
                  Floris{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Hector"
                  onClick={() => this.individualDataStudents("Hector")}
                >
                  Hector{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Martina"
                  onClick={() => this.individualDataStudents("Martina")}
                >
                  Martina{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Maurits"
                  onClick={() => this.individualDataStudents("Maurits")}
                >
                  Maurits{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Rahima"
                  onClick={() => this.individualDataStudents("Rahima")}
                >
                  Rahima{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Sandra"
                  onClick={() => this.individualDataStudents("Sandra")}
                >
                  Sandra{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Storm"
                  onClick={() => this.individualDataStudents("Storm")}
                >
                  Storm
                </Link>
              </li>
              <li>
                <Link
                  to="/Wietske"
                  onClick={() => this.individualDataStudents("Wietske")}
                >
                  Wietske
                </Link>
              </li>
            </ul>
          </nav>
          <div className="buttons">
            <span>
              <label>
                {" "}
                <input
                  id="difficultyBox"
                  type="checkbox"
                  checked={this.state.isCheckedDiff ? "checked" : ""}
                  onChange={this.handleChangeDifficulty}
                />{" "}
                Filter by difficulty:{" "}
              </label>
            </span>
            <span>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isCheckedFun ? "checked" : ""}
                  onChange={this.handleChangeFunFactor}
                />
                Filter by enjoyment:{" "}
              </label>
            </span>
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <Overview
                  averageDifficulty={this.state.difficulty}
                  averageFunFactor={this.state.funFactor}
                />
              </Route>

              <Route exact path="/LineChart">
                <LineChart
                  averageDifficulty={this.state.difficulty}
                  averageFunFactor={this.state.funFactor}
                />
              </Route>

              <Route path="/Aranka">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Evelyn">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Floris">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Hector">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Martina">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Maurits">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Rahima">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Sandra">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Storm">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
              <Route path="/Wietske">
                <Students
                  individualDataDifficulty={this.state.difficulty}
                  individualDataFunFactor={this.state.funFactor}
                  name={this.state.name}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
