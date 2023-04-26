import './CartWidget.css'

const CardWidget = () => {
    const ImgCarrito = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    return (
        <div>
            <img className='imgCarrito' src={ImgCarrito} alt="cart" />
            <strong>1</strong>
        </div>
    )
}

export default CardWidget
