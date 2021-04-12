import React from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/Collection_Preview/Collection-Preview.component';


class ShopPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collections : SHOP_DATA
    }
  }
    render() {
      const {collections} = this.state
     return (<div className="shop-Page">
      {
       collections.map(({id, title, items})=> <CollectionPreview key={id} title={title} items={items}/>)
        
      } </div>)
    }

}
export default ShopPage;