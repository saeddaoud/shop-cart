import React, { useEffect } from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../actions/productActions';
import Spinner from '../components/Spinner';

// import data from '../data/data.json';
// import phone from '../images/phone.jpg';
// import earbuds from '../images/earbuds1.jpg';
// import camera from '../images/camera.jpg';
// import mouse from '../images/mouse.jpg';

// const images = [phone, earbuds, camera, mouse];

// const newData = JSON.parse(JSON.stringify(data));

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productsList
  );

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <>
      <motion.div
        className='page home-page'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: '2' }}
      >
        <div className='container grid'>
          {/* <Spinner /> */}
          {loading && <Spinner />}
          {error && <h1>{Error}</h1>}
          {products &&
            products.map((item) => {
              // console.log(item);
              return (
                <Card
                  key={item._id}
                  // image={images[index]}
                  item={item}
                  // name={item.name}
                  // price={item.price}
                  // rating={item.rating}
                  // id={item.id}
                  // numReviews={item.numReviews}
                />
              );
            })}
        </div>
      </motion.div>
    </>
  );
  // return data.map((item, index) => <img src={images[index]} alt={item.name} />);
};

export default HomeScreen;
