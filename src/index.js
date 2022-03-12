import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import IMG1 from './images/1.jpg'
import IMG2 from './images/2.jpg'
import IMG3 from './images/3.jpg'
import IMG4 from './images/4.jpg'
import IMG5 from './images/5.jpg'
import IMG6 from './images/6.jpg'
import IMGSTART from './images/start-img.jpg'


function MyImage(props){
    return(
        <img className={props.className} src={props.src} onClick={props.onClick}/>
    )
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // images: null
            images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6],
            activeClasses: {
                images: 'grid-img',
                xButton: 'hidden',
                lArrow: 'hidden',
                rArrow: 'hidden'
            }
        };
        this.openModal =  this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // from https://www.codegrepper.com/code-examples/javascript/How+to+load+all+images+in+a+folder+react
    // importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }
    //
    //
    // componentDidMount() {
    //     this.setState({images: this.importAll(require.context(this.props.imgsPath, false, /\.jpg/))})
    // }

    // loadImages(imgClass = null, onClick = null) {
    //     let images = this.state.images.map((item, index) => {
    //         return (
    //             <img className={imgClass !== null ? imgClass : ''} src={item} onClick={onclick !== null ? onClick : ''}/>
    //         );
    //     });
    //     return images;
    // }

    openModal(evt) { // open modal
        console.log(evt.target);
        this.setState({activeClasses: {
            images: 'modal-thumbnail',
            xButton: 'modal-x',
            lArrow: 'prev-modal',
            rArrow: 'next-modal'
        }});
    }

    closeModal() { // close modal
        console.log('modal closed');
        this.setState({activeClasses: {
            images: 'grid-img',
            xButton: 'hidden',
            lArrow: 'hidden',
            rArrow: 'hidden'
        }});
    }

    render() {
        return (
            <>
                <img class="gallery-start-img" src={IMGSTART}/>
                <p id="zoom-message" style={{float: 'right', fontStyle: 'italic'}}>Click on an image to zoom.</p>
                <Gallery images={this.state.images} activeClasses={this.state.activeClasses} imageClick={this.openModal} xClick={this.closeModal}/>
            </>
        );
    }
}


class Gallery extends Page {
    constructor(props) {
        super(props);
    }

    renderImages(className, src, onClick){
        return (
            <MyImage
                className={className}
                src={src}
                onClick={onClick}
                key={src}
            />
        );
    }

    render() {

        // load images into list
        let images = [];
        for (let i = 0; i < this.props.images.length; i++) {
            images.push(this.renderImages(this.props.activeClasses.images, this.props.images[i], this.props.imageClick))
        }

        return (
            <>
                <div className='grid'>
                    {images}
                </div>
                <div className={this.props.activeClasses.xButton} onClick={this.props.xClick}><p>&#9587;</p></div>
                <a className={this.props.activeClasses.lArrow}>&#8249;</a>
                <a className={this.props.activeClasses.rArrow}>&#8250;</a>
            </>
        );
    }
}


ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
