import { useParams } from 'react-router-dom';

function ConstructorPage() {
  const { id } = useParams();

  return <div>Constructor Page for {id}</div>;
}

export default ConstructorPage;
