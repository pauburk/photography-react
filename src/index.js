import React from 'react'
import ReactDOM from 'react-dom'

import Topnav from './topnav/topnav.js'
import Footer from './footer/footer.js'
import Gallery from './gallery/gallery.js'

import './index.css'

const TITLEIMG = process.env.PUBLIC_URL + '/images/birds-title-img.jpg'
const imgsPath = process.env.PUBLIC_URL + '/images/gallery-birds/'


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalUp: false,
            images: this.importAll(require.context('../public/images/gallery-birds/', false, /\.jpg$/)), // can't use a variable, has to be string literal
            activeImg: '',
            activeClasses: {
                notModal: '',
                imagesDiv: 'grid',
                images: 'grid-img',
                modalImg: 'hidden',
                modalButtons: 'hidden',
                caption: 'hidden'
            }
        };
        this.openModal =  this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // idea from https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    importAll(r) {
        let paths = [];
        for(let i = 0; i < r.keys().length; i++) {
            paths.push(imgsPath + r.keys()[i].slice(2));
        };
        return paths;
        // return r.keys().map()
        // let images = {};
        // r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        // return images;
    }

    openModal(evt) { // open modal
        if(window.innerWidth > 800) {
            this.setState({
                modalUp: true,
                activeImg: imgsPath + evt.target.src.split('/').pop(),
                activeClasses: {
                    notModal: 'hidden',
                    imagesDiv: 'modal-row',
                    images: 'modal-thumbnail',
                    modalImg: 'modal-img',
                    modalButtons: '',
                    caption: 'caption'
                }
            })
        }
    }

    closeModal() { // close modal
        this.setState({
            modalUp: false,
            activeImg: '',
            activeClasses: {
                notModal: '',
                imagesDiv: 'grid',
                images: 'grid-img',
                modalImg: 'hidden',
                modalButtons: 'hidden',
                caption: 'hidden'
            }
        })
    }

    render() {
        return (
            <>
                <Topnav show={!this.state.modalUp}/>

                <div className={this.state.activeClasses.notModal}>
                    <img className='gallery-title-img' src={TITLEIMG}/>
                    <p id='zoom-message' style={{float: 'right', fontStyle: 'italic'}}>Click on an image to zoom.</p>
                </div>

                <Gallery
                    images={this.state.images}
                    activeImg={this.state.activeImg}
                    activeClasses={this.state.activeClasses}
                    imageClick={this.openModal}
                    xClick={this.closeModal}
                />

                <Footer show={!this.state.modalUp}/>
            </>
        )
    }
}



ReactDOM.render(
    <Page/>,
    document.getElementById('root')
)
