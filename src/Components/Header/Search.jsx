import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from '../../StoreSlices/SearchSlice';
import { Link } from 'react-router-dom';
class Search extends Component {
    clearSearchItem = () => {
        // const { clearSearchItem} = this.props;
        const {dispatch}=this.props;
 
        dispatch(setSearchTerm([]));
        console.log(dispatch);
        // clearSearchItem();
      };

    render() {
        const { searchResult } = this.props;
        const {className}=this.props;
        return (
            <div>
                <section className={className}>
                    <ul>
                        {searchResult.map((prdItem) => (
                            <Link to={`products/${prdItem.id}`} key={prdItem.id} onClick={this.clearSearchItem}>
                                <li className="flex" >
                                    <figure className="max-w-[30px]">
                                        <img src={prdItem.image} />
                                    </figure>
                                    <h1>{prdItem.title}</h1>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        searchResult: state.search,
        // products: state.product.products,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         clearSearchItem: () => dispatch(setSearchTerm([])),
//     }
// }
export default connect(mapStateToProps)(Search)


