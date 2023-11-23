const ItemListContainer = ({greeting}) => {
    const greetingStyle = {
        width:'100vw',
        fontSize:'30px',
        display:'flex',
        justifyContent:'center',
        alignitems: 'flex-start',
        paddingTop:'20px',
        fontWeight:'700',
    }

    return (
        <div style={greetingStyle}>
            {greeting}
        </div>
    )
}

export default ItemListContainer