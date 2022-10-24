function parse(launch, rocket) {
  const objToReturn = {
    flight_number: undefined,
    mission_name: '',
    mission_patch: '',
    details: '',
    rocket: {
      rocket_id: '',
      rocket_name: '',
      active: undefined,
      cost_per_launch: undefined,
      company: '',
    },
  };

  objToReturn.flight_number = launch.flight_number;
  objToReturn.mission_name = launch.mission_name;
  objToReturn.mission_patch = launch.links.mission_patch;
  objToReturn.details = launch.details;
  objToReturn.rocket.rocket_id = launch.rocket.rocket_id;
  objToReturn.rocket.rocket_name = launch.rocket.rocket_name;
  objToReturn.rocket.cost_per_launch = rocket?.cost_per_launch;
  objToReturn.rocket.active = rocket?.active;
  objToReturn.rocket.company = rocket?.company;

  return objToReturn;
}

export function parseAll(launches, rocketData) {
  const oToReturn = [];
  launches.map((launch) => {
    const rocket = rocketData.find(
      (rocketEl) => rocketEl.rocket_id === launch.rocket.rocket_id,
    );
    console.log(rocket);
    oToReturn.push(parse(launch, rocket));
  });

  return oToReturn;
}
