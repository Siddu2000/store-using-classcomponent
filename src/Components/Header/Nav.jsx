import React, { Component } from 'react'
import { CgProfile } from "react-icons/cg";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../../StoreSlices/SearchSlice';
import Search from './Search';

 class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter:"",
    };
  }
   

componentDidMount(){
  this.setState({searchFilter:""});
}
handleChange = (e) => {
  const { dispatch } = this.props;
  const { products } = this.props;

  const filteredProducts = products?.filter((product) => {
    return product?.title?.toLowerCase().includes(e.target.value.toLowerCase());
  });

  this.setState({ searchFilter: e.target.value });
  dispatch(setSearchTerm(filteredProducts));
};
  render() {
    const { searchFilter } = this.state;
    return (
      <div className="flex h-[100%] items-center justify-around sticky top-0 bg-white z-10">
      <Link to="/">
        <img className=" h-20 w-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAB9dre7bcCm5Wp7i0yS5p9n3cc3dPSjrq_g&usqp=CAU" />
      </Link>
      <section className="search-item relative">
        <input
          className="px-3 py-1  border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          name="search "
          value={searchFilter}
          onChange={this.handleChange}
          placeholder="search all products...🔍"
        />
         {
          searchFilter  && <Search className="absolute w-[100%] max-h-[150px] overflow-y-auto shadow-sm bg-white top-10" />
        }
      </section>
   <CgProfile className='text-2xl'/>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        searchResult: state.search,
        products: state.product.products,
    }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     searchTerms: dispatch(setSearchTerm())
//     }
// }
export default connect(mapStateToProps)(Nav)
