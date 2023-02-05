import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ className, children }: { className?: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className={`product-card ${className || ""}`}>
            {children}
        </div>
    )
}

ProductCard.Content = ({ className, children }: { className?: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className={`left ${className || ""}`}>
            {children}
        </div>
    )
}

ProductCard.Image = ({ className, children }: { className?: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className={`right ${className || ""}`}>
            {children}
        </div>
    )
}

ProductCard.Title = ({ className, children }: { className?: string, children: string }) => {
    return (
        <h2 className={`title ${className || ""}`}>
            {children}
        </h2>
    )
}

ProductCard.SubTitle = ({ className, children }: { className?: string, children: string }) => {
    return (
        <span className={`title ${className || ""}`}>
            {children}
        </span>
    )
}

ProductCard.Description = ({ className, children }: { className?: string, children: string }) => {
    return (
        <p className={`desc ${className || ""}`}>
            {children}
        </p>
    )
}

ProductCard.Button = ({ className, children, to }: { className?: string, to: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <Link to={to} className={`btn-card ${className || ""}`}>
            {children}
        </Link>
    )
}


ProductCard.Img = ({ className, src }: { className?: string, src: string }) => {
    return (
        <img src={src} className={`image ${className || ""}`} alt='product' />
    )
}
ProductCard.Line = () => {
    return (<hr />)
}
export default ProductCard;