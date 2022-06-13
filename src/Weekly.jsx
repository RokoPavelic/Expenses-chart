import { Days } from "./Days";
import { data } from "./Data";

function Weekly() {
  const amounts = data.map((day) => {
    return day.amount;
  });

  const biggest = Math.max(...amounts);

  return (
    <div className="week-forecast">
      {data.map((day, i) => (
        <Days dayData={day} key={i} biggest={biggest} />
      ))}
    </div>
  );
}

export default Weekly;
