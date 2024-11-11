import { useParams } from 'react-router-dom';

import classes from './Driver.module.css';

function DriverPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Driver Page for Driver {id}</h1>
    </>
  );
}

export default DriverPage;
