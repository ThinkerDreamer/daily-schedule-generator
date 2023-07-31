import { Activity } from '../types';

const generateSchedule = (
  introspectiveActivities: string[],
  freeTimeActivities: string[]
): Activity[] => {
  const introspectiveActivity =
    introspectiveActivities[
      Math.floor(Math.random() * introspectiveActivities.length)
    ];
  const freeTimeActivity =
    freeTimeActivities[
      Math.floor(Math.random() * freeTimeActivities.length)
    ];

  const activities: Activity[] = [
    { time: '8:10 AM', name: 'Put in contacts' },
    { time: '8:15 AM', name: 'Swish and Swipe routine' },
    { time: '8:25 AM', name: 'Clean desk' },
    { time: '8:30 AM', name: 'Have breakfast' },
    { time: '8:45 AM', name: introspectiveActivity },
    { time: '9:00 AM', name: freeTimeActivity },
    { time: '10:00 AM', name: 'Start work' },
  ];

  return activities;
};

export default generateSchedule;
