import './Overlay.scss';

const Overlay = ({ onClick, children, show }: { onClick: any, children: JSX.Element | JSX.Element[], show: boolean }) => {

    return (
        <>
            <div onClick={onClick} className={`overlay${show ? " show" : ""}`}></div>
            {children}
        </>
    )
}

export default Overlay;