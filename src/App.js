import "./App.css";
import Weekly from "./Weekly";

function App() {
  return (
    <div className="container">
      <div className="balance">
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>

      <div className="spending">
        <h3 className="spending_title">Spending-Last 7 days</h3>
        <div className="last_days">
          <Weekly />
        </div>
      </div>
      <div className="total">
        <div className="count">
          <p>Total this month</p>
          <h3>$478.33</h3>
        </div>
        <div className="percent">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default App;
