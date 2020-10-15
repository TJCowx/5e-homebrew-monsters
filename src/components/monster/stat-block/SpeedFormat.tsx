import React from 'react';

type Props = {
  landSpeed: string;
  flySpeed: string;
  burrowSpeed: string;
  climbSpeed: string;
  hoverSpeed: string;
}

function SpeedFormat({
  landSpeed,
  flySpeed,
  burrowSpeed,
  climbSpeed,
  hoverSpeed,
}: Props) {
  return (
    <span>
      {landSpeed && parseInt(landSpeed) > 0 && <>{landSpeed}ft. </>}
      {flySpeed && parseInt(flySpeed) > 0 && <>fly {flySpeed}ft., </>}
      {burrowSpeed && parseInt(burrowSpeed) > 0 && <>burrow {burrowSpeed}ft., </>}
      {climbSpeed && parseInt(climbSpeed) > 0 && <>climb {climbSpeed}ft., </>}
      {hoverSpeed && parseInt(hoverSpeed) > 0 && <>hover {hoverSpeed}ft. </>}
    </span>
  );
}


export default SpeedFormat;
