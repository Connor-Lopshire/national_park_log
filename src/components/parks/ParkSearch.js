import { useEffect, useState } from "react"
import { getStates } from "../managers/ParkManager"

export const ParkSearch = ({ setParks, loadParks }) => {
    const [searchTerms, setSearchTerms] = useState()
    const [stateSelected, setStateSelected] = useState()
    const [states, setStates] = useState()
    useEffect(
        () => {
            if (searchTerms == '') {
                loadParks(undefined)
            } 
        }
    , [searchTerms])
  
    const loadStates = () => getStates().then(data => setStates(data))
    useEffect(() => {
        loadStates()
    }, [])
    return <section className="search">
        <p className="panel-heading">
            Search Parks
        </p>
        <br />
        <div className="field has-addons">
            <div className="control">
                <input
                    //filters posts to search criteria if there is a search
                    onChange={
                        (event) => {
                            setSearchTerms(event.target.value)
                        }
                    }

                    type="search" placeholder="Search post by title"
                    className="input"


                />
            </div>
            <div className="control">
                {/* on click displays searched posts */}
                <button className="button is-info" onClick={() => { loadParks(undefined, searchTerms, stateSelected) }}></button>
            </div>
        </div>
        <div className="select">
            <select className="select" onChange={(event) => {
                let chosenState = event.target.value 
                setStateSelected(chosenState)
                
                
            }}>
                <option>Filter by State</option>
                {/* {states.map((state) => {
                    return <option value={state?.state_code}>{state?.state_code}</option>
                })} */}
            </select>
        <button onClick={(evt) => {
            setStateSelected(undefined)
            loadParks()
        }}>Reset Filter</button>
        </div>


    </section>
}