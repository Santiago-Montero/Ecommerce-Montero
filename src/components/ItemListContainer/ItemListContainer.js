import ItemList from '../ItemList/ItemList'


function ItemListContainer ({items}){

    return(
        <>
        <div>
            {items ? <ItemList key={items.id} itemList={items}/> : <h1>No se encontro ningun Item</h1>}
        </div>
        </>
    );
}

export default ItemListContainer ;