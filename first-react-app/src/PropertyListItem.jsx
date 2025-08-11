function PropertyListItem({item}){
    return(
        <li>
            {item.name}- {item.rating} - {item.price}
        </li>
    );
}

export default PropertyListItem;