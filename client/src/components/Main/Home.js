// стилизация
import homeImg from '../../assets/home.png';

function Home() {

    return(
        <div className="container d-flex justify-content-center" style={{height: "100%"}}>
            <div className="row my-auto">
                <div className="col-9 text-center mx-auto">
                    <img src={homeImg} alt="Man" width="200" height="300" />
                    <h3>Все готово</h3>
                    <p>Можно двигаться дальше: выберите подходящий пункт меню.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;