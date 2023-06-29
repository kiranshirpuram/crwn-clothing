import { useContext, Fragment } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';
 import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

// import './shop.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {      
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </Fragment>
  );
};

export default CategoriesPreview;









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
