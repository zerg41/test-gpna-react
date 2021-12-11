const productsList = [
    'Трубопроводная арматура',
    'Отдельные соединительные элементы, детали трубопровода',
    'Регуляторы газового давления',
];

const PRODUCTS_NUMBER = 6;

const addRow = (index, productName) =>{
    return(
        <tr key={index}>
            <td>{index}</td>
            <td>{productName}</td>
        </tr>
    );
};

const RenderProducts = () => {
    let products = [];

    for (let i = 0; i < PRODUCTS_NUMBER; i ++) {
        let index = i + 1;
        let productName = productsList[i % productsList.length];
        products.push(addRow(index, productName));
    }

    return products;
};


function Production() {

    return(
        <div className="container">
            <h3 className="mt-4 ms-4">Продукция</h3>
            <div className="col-8 mt-4 ms-4">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col" className="col-3">ID</th>
                            <th scope="col">НАИМЕНОВАНИЕ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderProducts />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Production;