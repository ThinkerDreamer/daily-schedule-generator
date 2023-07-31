// libs
import React, { FC, ReactElement } from 'react';
// local
import generateSchedule from '../utils/generateSchedule';
import Schedule from '@/components/Schedule';

const Home: FC = (): ReactElement => {
  // TODO: All users to customize these activities
  const introspectiveActivities = React.useMemo(
    () => [
      'Reading',
      'Gratitude Journaling',
      'Mindful Breathing',
      'Affirmations',
      'Goal Review',
    ],
    []
  );
  const freeTimeActivities = React.useMemo(
    () => [
      'Exercise or yoga',
      'Learning',
      'Connect with others',
      'Play with the cat',
      'Play video games',
      'Watch YouTube',
      'Watch Netflix',
      'Practice violin',
      'Practice a language',
    ],
    []
  );

  React.useEffect(() => {
    setTodaysActivities(
      generateSchedule(introspectiveActivities, freeTimeActivities)
    );
  }, []);

  // Load the schedule from localStorage when the component is first rendered
  React.useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setTodaysActivities(JSON.parse(storedActivities));
    } else {
      const newActivities = generateSchedule(
        introspectiveActivities,
        freeTimeActivities
      );
      setTodaysActivities(newActivities);
      localStorage.setItem('activities', JSON.stringify(newActivities));
    }
  }, []);

  // Generate a new schedule and save it to localStorage
  const handleNewSchedule = () => {
    const newActivities = generateSchedule(
      introspectiveActivities,
      freeTimeActivities
    );
    setTodaysActivities(newActivities);
    localStorage.setItem('activities', JSON.stringify(newActivities));
  };

  const [todaysActivities, setTodaysActivities] = React.useState(null);

  return (
    <div className="container my-40 mx-auto px-4 flex flex-col max-w-xl justify-center">
      <h1 className="text-6xl mb-8 mx-auto">My Daily Schedule</h1>
      {todaysActivities && (
        <div className="flex flex-col justify-center max-w-fit mx-auto">
          <Schedule activities={todaysActivities} />
        </div>
      )}
      <button
        className="bg-purple-700 hover:bg-purple-800 font-light text-white py-4 text-2xl rounded"
        onClick={handleNewSchedule}>
        Get new schedule
      </button>
    </div>
  );
};

export default Home;
