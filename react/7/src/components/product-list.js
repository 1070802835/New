/**
 * Created by hasee on 2016/12/30.
 */


import React,{Component} from "react"
import {Link} from "react-router"

/*写组件的时候，尽量 把组件名写完整，描述清晰*/
class  ProductList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="product-list">
                {
                    this.props.productData?this.props.productData.map((ele,i)=><li key={i}>
                        <a href={"#/detial/"+ele.goodsID}>
                            <img src={ele.goodsListImg}/>
                        </a>

                        <Link to={"/detial/"+ele.goodsID}>
                            <p style={{"lineHeight":"30px"}}>{ele.goodsName}</p>
                        </Link>


                    </li>):""
                }
            </ul>
        )
    }

}

export default ProductList
