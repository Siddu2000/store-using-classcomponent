import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { FETCH_PRODUCT_DETAIL } from '../../Constants/Constants';

const PostWrapper = () => {
  const { id } = useParams();
  return <ProductDetails id={id} />;
};

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
    }
  }
  componentDidMount() {
    fetch( FETCH_PRODUCT_DETAIL+this.props.id)
      .then(response => response.json())
      .then((data) => {
        console.log("Product detail Data", data);
        this.setState({ productDetails: data })
      })

  }
  render() {
    const product = this.state?.productDetails;
    return (
      <div>
        <h1 className='font-semibold text-green-400'>ProductDetails</h1>

        <div className=" py-2 px-1 border border-[white] shadow-sm flex text-center items-center w-[30rem] m-auto gap-x-4 ">
          <div className="flex flex-col justify-center items-center gap-3 w-[16rem]">
            <img
              className="h-[250px] w-[100%] object-contain"
              src={product?.image}
              alt="product-image"
            />
            <h2 className="line-clamp-1 text-[0.8rem] text-center font-medium">
              {product?.title}
            </h2>
            <h1>$:{product?.price}</h1>
            <h2 className="w-16 h-6 bg-green-700 text-center  rounded-md text-xs">
              {product?.rating?.rate} ⭐
            </h2>
          </div>
          <span className="w-52 flex flex-wrap"><h2 className='text-xl font-semibold'>Description:</h2>{product?.description}</span>
        </div>
      </div>
    )
  }
}
export default PostWrapper;
