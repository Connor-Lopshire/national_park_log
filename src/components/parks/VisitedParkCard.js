export const VisitedParkCard = ({ parks }) => {
    return <section>

    { parks.map(park => {

        
        return <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={park?.park?.images[0]?.url} alt={park?.park?.images[0]?.alt_text}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={park?.park?.images[0]?.url} alt={park?.park?.images[0]?.alt_text}/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{park?.park?.full_name}</p>
                    <p className="subtitle is-6">{park?.park?.state}</p>
                </div>
            </div>

            <div className="content">
            { park.visited = false ?
                <button className="button">Visited</button>
                :
                <button className="button">Add Visit</button>

                }
                <button className="button ">Bucket List</button>
            </div>
        </div>
    </div>
        })
    }
    </section>
} 



