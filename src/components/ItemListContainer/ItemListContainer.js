import ItemList from '../ItemList/ItemList'


function ItemListContainer ({items}){

    return(
        <>
        <div>
            <ItemList key={items.id} itemList={items}/>
        </div>
        </>
    );
}

export default ItemListContainer ;