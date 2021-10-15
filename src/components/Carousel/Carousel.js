import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel(){

    const imgs = [{img:"https://i.imgur.com/8PSWUut.jpg" ,id: 2, name: "homeImgCarouselRun"},
                  {img:"https://i.imgur.com/Hk64aLU.jpg" ,id: 3, name: "homeImgCarouselRun"}]
                

    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="https://i.imgur.com/VJZD3VI.jpg" className="d-block w-100" alt="homeImgCarouselRun"/>
                    </div>
                    {imgs.map(img =>
                    <div className="carousel-item" key={img.id}>
                        <img src={img.img} className="d-block w-100" alt={img.name}/>
                    </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;