// this component will pull in props from DetailContainer
// will render a image carousel
// will list credit title and caption and have alt_text
//  image.url to access each image 
// import '/path/to/flickity.css'
// import '/path/to/flickity.pkgd.min.js'

export const ParkImageCarousel = ({images}) => {
//     

return <section>
{
    images.map(image => {
        return  <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
                <img src={image?.url} alt={image?.alt_text}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{image?.title}</p>
                    <p className="subtitle is-6">{image?.credit}</p>
                    <p className="subtitle is-6">{image?.caption}</p>

                </div>
            </div>

            
        </div>
        </div>
    })
}
</section>
}
