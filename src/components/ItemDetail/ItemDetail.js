import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function ItemDetail({item}){

    const imagenes = item.imgs
    

    return(
        <>
        <div className="itemDetailContainerImg"> 
            <Splide>
                <SplideSlide>
                    <img src={item?.img} alt={item?.name} />
                </SplideSlide>
                {imagenes.map(img =>
                    <SplideSlide key={img}>
                    <img  src={img} alt={item?.name} />
                    </SplideSlide>
                )}
            </Splide>
        </div>
        <div className="itemDetail">
                <div className="description">
                    <h3>{item?.name}</h3>                
                    <div className="descriptionItemCount">
                        <ItemCount key={item?.id} item={item}/>
                    </div>
                    <div className="descriptionItemCount">
                        <p>Stock : {item?.stock}</p>
                    </div>
                </div>
            <div className="itemDetailContainerText container">
                <div className="itemDetailContainerTextTitulo">
                    <h4>Descripcion</h4>
                </div>
                <div className="itemDetailContainerTextDesc">
                    <p>{item.description}</p>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default ItemDetail;