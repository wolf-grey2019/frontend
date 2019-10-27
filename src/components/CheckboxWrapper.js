import React from 'react';
import range from 'lodash/range';
import './CheckboxWrapper.css';

function Checkbox({ checked, onChange, id }) {
    return (
		<label>
			<input
				type="checkbox"
				id={`id${id}`}
				checked={checked}
				onChange={onChange}
			/>
			check{id % 4}
			<br/>
		</label>
    );
}

class Div extends React.Component {
    renderCheckbox(i) {
        return (
            <Checkbox
				key={this.props.divNumber * 4 + i}
				id={this.props.divNumber * 4 + i}
				checked={this.props.checks[this.props.divNumber * 4 + i]}
                onChange={() => this.props.onChange(this.props.divNumber, i)}
            />
        );
    }

    render() {
        let countChecked = 0;///////////////////////////////////////////////
        for (let i = 0; i < 4; i++) {
			countChecked += this.props.checks[this.props.divNumber * 4 + i];
		}
		
        return (
            <div className="checkbox-wrapper">
                <p>div {this.props.divNumber} - number of Checked: {countChecked}</p>
				{range(0, 4).map((i) => 
					this.renderCheckbox(i)
				)}
            </div>
        );
    }
}

class CheckboxWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checks: Array(16).fill(false),
        };
    }

    handleChange(divNumber, checkNumber) {
		const { checks } = this.state;

		// const check = Object.assign({}, checks);
		checks[divNumber * 4 + checkNumber] = !checks[divNumber * 4 + checkNumber];
		this.setState({
			checks,
		});
    }

    render() {
        return (
			<>
				{range(0, 4).map((i) =>
					<Div
						key={i}
						checks={this.state.checks}
						divNumber={i}
						onChange={(divNumber, checkNumber) => this.handleChange(divNumber, checkNumber)} 
					/>
				)}
			</>
        );
    }
}

export default CheckboxWrapper;