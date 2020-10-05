import React from 'react';
import propTypes, { InferProps } from 'prop-types';

function SpeedFormat({
  landSpeed,
  flySpeed,
  burrowSpeed,
  climbSpeed,
  hoverSpeed,
}: InferProps<typeof SpeedFormat.propTypes>) {
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

SpeedFormat.propTypes = {
  landSpeed: propTypes.string,
  flySpeed: propTypes.string,
  burrowSpeed: propTypes.string,
  climbSpeed: propTypes.string,
  hoverSpeed: propTypes.string,
};

export default SpeedFormat;
