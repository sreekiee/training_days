

/* this is used a few places and it is vulnerable */

function getAllEvents(){
  return ['Marathon', 'Triathlon', 'Decathlon'];
}

const getRandomEvent = () => {
  const allEvents = getAllEvents();
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};


const getEventActivities = (event) => {
  const allEvents = getAllEvents();
	let activities;
  if (!allEvents.includes(event)) {
    return null;
  }

  if (event === 'Marathon') {
    activities = ['Running'];
    return activities.join(', ');
  }
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', ');
  }
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', ');
  }

};

const getDaysToTrain = (event) => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null;
  }

  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

/*
function getEventMessage(){
  const myEvent = getRandomEvent();
  return myEvent;
}
*/

let event = getRandomEvent();

console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities(event) + '. You have ' + getDaysToTrain(event) +  ' days to train.');
