import { LoaderRotatingLines } from './Loader.styled';

export const Loader = () => (
  <LoaderRotatingLines
    strokeColor="blue"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
);
