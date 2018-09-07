checkSpeed();

function checkSpeed(speed) {
  const speedLimit = 70;
  const errors = 5;

  if (speed < speedLimit + errors) {
    console.log("Driving great!!");
    return;
  }
  const points = Math.floor((speed - speedLimit) / errors);
  if (points >= 12) console.log("You gotta slow down!!");
  else console.log("Points", points);
}
