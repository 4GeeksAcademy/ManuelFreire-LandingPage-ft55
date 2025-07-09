import PropTypes from 'prop-types';

let Card = (props) => {
    return (
        <div className="card col-md p-0 w-100 shadow">
            <img src={props.img} className="card-header p-0" alt="..." />
            <div className="card-body py-5">
                <h5 className="card-title">{props.tit}</h5>
                <p className="card-text">{props.parrafo}</p>
            </div>
            <div className="card-footer text-body-secondary text-center py-3">
                <a href="#" className="btn btn-primary">{props.btn}</a>
            </div>
        </div>
    );
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    tit: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired
}
export default Card