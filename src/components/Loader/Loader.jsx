import { LoaderRotatingLines } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <LoaderRotatingLines>
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </LoaderRotatingLines>
);
