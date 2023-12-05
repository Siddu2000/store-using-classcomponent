import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import { FetchProduct } from '../../StoreSlices/ProductSlice';
import { ImSpinner3 } from "react-icons/im";
 class ProductList extends Component {

    componentDidMount() {
        const {fetchUser}=this.props
            fetchUser();
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            // cssEase: "linear"
        //    arrows:false,
     
        };
        const {products,loading}=this.props.products;
     
        console.log(this.props);
        console.log(loading);
      
        return (
            <div>
                <Slider {...settings} className='w-[96%] m-auto'>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23102023-MainBannerDailyChanging-Z1-P3-DillingerTheBeaHouse-min60.jpg" alt="T-shirt" />
                    </div>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22112023-BlackFridaySale-Entrypoint1.gif" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23102023-MainBannerDailyChanging-Z1-P4-Mnsgap-upto50.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22112023-BlackFridaySale-Entrypoint1.gif" alt="" />
                    </div>
                </Slider>
               { loading ?  <h1><ImSpinner3 className="animate-spin m-auto mt-40 text-9xl text-blue-600"/></h1> 
               :( <div className='flex flex-wrap gap-x-1 gap-y-5 justify-center items-center'>
                    {products?.map((product) => {
                        return (
                            <div className='max-w-[300px] w-[100%] py-2 px-1 border border-[white] shadow-sm flex flex-col justify-center items-center' key={product.id}>
                                <Link to={`/products/${product.id}`} key={product.id}>
                                    <img
                                        className="h-[250px] w-[100%] object-contain"
                                        src={product?.image}
                                        alt="product-img"
                                    />
                                    <h2 className="line-clamp-1 text-[0.8rem] text-center font-medium">
                                        {product?.title}
                                    </h2>
                                    <h1 className="text-center">$:{product?.price}</h1>
                                    <h2 className="flex items-center justify-center text-center  rounded-md text-lg">
                                        {product?.rating?.rate} ⭐
                                    </h2>
                                </Link>
                            </div>
                        )
                    })}
                </div>
               )
            }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.product,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUser: () => dispatch(FetchProduct()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
