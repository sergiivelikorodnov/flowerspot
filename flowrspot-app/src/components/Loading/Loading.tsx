import {TailSpin} from 'react-loader-spinner';

function Loading(): JSX.Element {
  const LOADING_HEIGHT = 50;
  const LOADING_WIDTH = 50;

  return (
    <div className="loading" data-testid="loading">
      <TailSpin
        color="#4481c3"
        height={LOADING_HEIGHT}
        width={LOADING_WIDTH}
      />
    </div>

  );
}

export default Loading;
