// this will pull props from DetailsContainer
// will render park info full_name description designation addresses and url for nps site
export const ParkDetails = ({addresses, url, full_name, description, designation}) => {
    return <div>
<div>{full_name}</div>
<div>{addresses[0]?.city}</div> <div>{addresses[0]?.state_code}</div>
<div>{description}</div>
<div>{designation}</div>
<div>{url}</div>

</div> 
}