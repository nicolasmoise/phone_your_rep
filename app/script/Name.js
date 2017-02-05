import React from 'react';

export default class SocialLink extends React.Component {

	render() {
		return (
			<div className="card-name">
				<h3 className="card-member">
					{this.props.name}
				</h3>
				<p className="card-chamber">
					{this.props.chamber}
				</p>
				<img className="card-party" src={require('../images/' + this.props.party.toLowerCase() + '.png')}></img>
			</div>
		);
  	}
};
