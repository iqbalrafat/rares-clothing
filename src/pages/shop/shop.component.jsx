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
      
     return (
        <div> This is shope page </div>
      )
    }

}
export default ShopPage;