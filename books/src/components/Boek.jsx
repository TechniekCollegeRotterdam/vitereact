const Boek = ({image, title, author}) => {
    return (
        <>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <h3>{author}</h3>
        </>
    );
};

export default Boek

