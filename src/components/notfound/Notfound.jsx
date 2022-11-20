import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <>
      <div className="col d-flex flex-column justify-content-center mb-5 alert-null">
        <img
          src="/images/thum-none-food.png"
          className="img-thumbnail"
          width="400"
          height="400"
          alt=""
        />
        <h4 className="mt-5 color-primary">You Dont Have Any Food</h4>
        <Link to="/home">
          <button className="mt-5 button button-main text-decoration-none">
            Foods
          </button>
        </Link>
      </div>
    </>
  );
};

export default Notfound;
