import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  ContactIr,
  ContactEu,
  ContactUs,
  Admin,
  PageNotFound,
} from '../pages/index';

export const AllRoutes = () => {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="ir" element={<ContactIr />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
