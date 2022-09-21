// this component will pull in props from DetailContainer
// will render a image carousel
// will list credit title and caption and have alt_text
//  image.url to access each image 
// import '/path/to/flickity.css'
// import '/path/to/flickity.pkgd.min.js'
import Carousel from 'react-multi-carousel';
import WithStyles from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
export const ParkImageCarousel = ({ images }) => {
    //     

    return <section >
    <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
            },
            mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
            },
            tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
    >
        {images.map(image => {
            return <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img className="carousel-cell-image" src={image?.url} alt={image?.alt_text} />
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


        })}

    </Carousel>
    </section>
}