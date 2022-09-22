import { useEffect, useState } from "react"
import { getStates } from "../managers/ParkManager"

export const ParkSearch = ({ setParks, loadParks }) => {
    const [searchTerms, setSearchTerms] = useState()
    const [stateSelected, setStateSelected] = useState()
    const [states, setStates] = useState([])
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
                    className="input "


                />
            </div>
            <br />
            <div className="control">
                {/* on click displays searched posts */}
                <button className="button is-info" onClick={() => { loadParks(undefined, searchTerms, stateSelected) }}>Search</button>
            </div>

             

                        <div className="select">

                        <select value={stateSelected} className="select" onChange={(event) => {
                            let chosenState = event.target.value
                            setStateSelected(chosenState)
                            loadParks(undefined, searchTerms, chosenState)
                            
                        }}>
                            <option value={0}>Filter by State</option>
                            {states.map((state) => {
                                return <option value={state?.state_code}>{state?.state_code}</option>
                            })}
                        </select>
                            </div>

                        <button className="button" onClick={(evt) => {
                            setStateSelected(0)

                            loadParks()
                        }}>Reset Filter</button>
            </div>


    </section>
}