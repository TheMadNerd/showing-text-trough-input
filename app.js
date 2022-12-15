class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messageIsActive: false,
		}
	}

	handleMessageButton() {
		this.setState({
			messageIsActive: !this.state.messageIsActive,
		})
	}

	render() {
		console.log(this.state.messageIsActive)
		const text = 'Information'

		return (
			<React.Fragment>
				<button onClick={this.handleMessageButton.bind(this)}>{this.state.messageIsActive ? 'Hide' : 'Show'}</button>
				<p>{this.state.messageIsActive ? `${text}` : ''}</p>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<Message />, document.getElementById('root'))
