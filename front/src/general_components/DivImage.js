import React, {Component} from 'react'

export class DivImage extends Component {

    render() {
        var backgroundStyle = {
            height: this.props.height
        }
        if (this.props.gradient) {
          backgroundStyle["background"] = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 152, 0, 0.3) 90%), linear-gradient(0deg, rgba(255, 152, 0, 0.4), transparent), url('+ this.props.img +') center 45%/cover no-repeat';
        } else {
          backgroundStyle["background"] = 'url(' + this.props.img + ') center/cover no-repeat';
        }

        if (this.props.curverd) {
          backgroundStyle["borderRadius"] = "0 0 100% 100%";
        }
        const {children} = this.props;
        return (
            <div className="imgBack" style={backgroundStyle}></div>
        )
    }

}
export default DivImage;
