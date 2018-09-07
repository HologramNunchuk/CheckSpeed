checkSpeed(300);

function checkSpeed(speed) {
  const speedLimit = 70;
  const errorPoints = 5;

  if (speed < speedLimit + errorPoints) console.log("Driving Safe!!");
  else {
    const points = Math.floor((speed - speedLimit) / errorPoints);

    if (points >= 12) console.log("Slow Down!!");
    else console.log("Points", points);
  }
}
