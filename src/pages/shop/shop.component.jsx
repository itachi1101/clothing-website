//because we need to store data related to our actual colletion on our shop page
import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from  '../../components/preview-collection/collection-preview';
class ShopPage extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }

    }
    render(){
        const {collections}=this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps})=>(
                 <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
               
        
    }



export default ShopPage;