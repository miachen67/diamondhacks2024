const BuildingDetails =({building}) =>{
    return (
        <div className="building-details">
            <h4>{building.buildingName}</h4>
            <p> Location: {building.address}</p>
            <p>Accessibility:{building.accessibility}</p>
            <p>{building.createdAt}</p>
        </div>
    )
}

export default BuildingDetails