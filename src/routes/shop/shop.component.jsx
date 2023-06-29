import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../category/category.component';

// import { useContext, Fragment } from 'react';

// // import ProductCard from '../../components/product-card/product-card.component';
//  import CategoryPreview from '../../components/category-preview/category-preview.component';

// import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> } />
      <Route path=':category' element={ <Category /> } />
    </Routes>
    // <div className='shop-container'>
    //   {Object.keys(categoriesMap).map((title) => {      
    //     const products = categoriesMap[title];
    //     return (
    //       <CategoryPreview key={title} title={title} products={products} />
    //     )
    //   })}
    // </div>
  );
};

export default Shop;









// import { useContext, Fragment } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';

// import { CategoriesContext } from '../../contexts/categories.context';
// // import { ProductsContext } from '../../contexts/products.context';

// import './shop.styles.scss';

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <Fragment>      
//       {Object.keys(categoriesMap).map((title) => (
//           <Fragment key={title}>
//             <h2>{title}</h2>
//             <div className='products-container'>
//               {categoriesMap[title].map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </Fragment>
//        ))}
//     </Fragment>
//   );
// };

// export default Shop;
