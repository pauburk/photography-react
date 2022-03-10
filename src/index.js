import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import IMG1 from './images/1.jpg'
import IMG2 from './images/2.jpg'
import IMG3 from './images/3.jpg'
import IMG4 from './images/4.jpg'
import IMG5 from './images/5.jpg'


class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // images: null
            images: [IMG1, IMG2, IMG3, IMG4, IMG5]
        }
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

    loadImages(imgClass = null) {
        // **TODO** Move this to a "master" sort of class to use this for multiple components without copy-pasting
        let images = this.state.images.map((item, index) => {
            return (
                <img className={imgClass !== null ? imgClass : ''} src={item}/>
            );
        });
        return images;
    }

    render() {
        return (
            <>
                <Grid/>
                <Modal/>
            </>
        );
    }
}


class Grid extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='grid' id='grid'>
                {this.loadImages('grid-img')}
            </div>
        );
    }
}


class Modal extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='modal' id='modal'>
                <div className='modal-content' id='modal-content'>

                    /* previous and next arrows */

                    {this.loadImages('modal-img')}

                    <div className='modal-row' id='modal-row'>
                        {this.loadImages('modal-thumbnail')}
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Page imgsPath='./images/'/>,
    document.getElementById('root')
);
