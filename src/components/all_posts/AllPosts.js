import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chooseOne: null}

    postSelect = (id) => {
        let {posts, chooseOne} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chooseOne: find});
    }


    render() {

        let {posts, chooseOne} = this.state

        return (
            <div>
                {posts.map(post => <Post item={post} key={post.id} postSelect={this.postSelect}/>)}
                {
                    chooseOne && <p>{chooseOne.id}-{chooseOne.title}</p>
                }
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            })
    }
}

export default AllPosts;