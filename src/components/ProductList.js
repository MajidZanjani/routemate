import { useSearchParams, useLocation } from 'react-router-dom';

export const ProductList = () => {
  const [searchparams] = useSearchParams();
  // console.log(searchparams.get('keyword'));
  const location = useLocation();
  // console.log(location);

  return <div className="component">ProductList</div>;
};
