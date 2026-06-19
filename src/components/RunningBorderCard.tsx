import React from 'react';

interface RunningBorderCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const RunningBorderCard: React.FC<RunningBorderCardProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`running-border-container group tilt-card ${className}`}>
      <div className="running-border-gradient" />
      <div className="running-border-inner">
        {children}
      </div>
    </div>
  );
};
export default RunningBorderCard;
