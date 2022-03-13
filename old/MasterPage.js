import React from 'react'
import Topnav from './topnav/topnav.js'
import Footer from './footer/footer.js'

class MasterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMasterPage: true}
        this.setShow = this.setShow.bind(this)
    }

    setShow(yes) {
        this.setState({showMasterPage: yes})
    }

    render() {
        return (
            <>
                <Topnav/>
                {React.createElement(this.props.contentTag, {showMasterpage: this.setShow})}
                <Footer/>
            </>
        )
    }
}

export default MasterPage;
