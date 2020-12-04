import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, postSelect} = this.props;
        return (
            <div>
                {item.id} - {item.title} -
                <button onClick={() => postSelect(item.id)}>Choose</button>
            </div>
        );
    }
}

export default Post;