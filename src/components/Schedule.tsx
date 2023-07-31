// libs
import { FC, ReactElement } from 'react';
// local
import { Activity } from '../types';

interface ScheduleProps {
  activities: Activity[];
}

const Schedule: FC<ScheduleProps> = ({
  activities,
}: ScheduleProps): ReactElement => (
  <div className="mb-8">
    {activities.map((activity: Activity, index: number) => (
      <p key={index} className="text-lg">
        <span className="font-bold">{activity.time}:</span> {activity.name}
      </p>
    ))}
  </div>
);

export default Schedule;
