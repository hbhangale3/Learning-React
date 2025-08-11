import PropertyListItem from "./PropertyListItem";

function PropertyList({properties}){
    
    return(
        <ul>
            {properties.map(item => <PropertyListItem key={item.id} item={item}/>)}
            
        </ul>
    );
}

export default PropertyList;