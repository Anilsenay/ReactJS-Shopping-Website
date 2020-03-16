import React from 'react'
import { connect } from 'react-redux'
import ShoppingCartIcon from './ShoppingCartIcon'
import CartMenuItem from './CartMenuItem'

function CartMenu(props) {

    return (
        <div className={`cart-menu ${props.isCartMenuActivated === true ? "cart-menu-active":null}`}>
            <div className="cart-title">
                <span className="cart-title-text">Cart</span>
                <ShoppingCartIcon bgColor="white" sizes="30px" className="margin-top" right="cart-icon-right"/>
            </div>
            <div className="cart-body">
                {(props.inCard.length === 0) ? 
                    (
                        <div>No item added</div> 
                    )
                    : 
                    (
                        <div className="cart-menu-items"> 
                            <CartMenuItem/>
                            <CartMenuItem/>

                        </div>
                    )
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps)(CartMenu)