import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
	render() {
        let category = "all";
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
        }
		return (
            <div className="Home">
                <h2>Category: { category }</h2>
                <h2>This is home</h2>
                <ul>
                    {this.props.categories.map((c, idx) => (
                        <li key={idx}>{c.name}</li>
                    ))}
                </ul>
            </div>
		);
	}
}

export default Home;
