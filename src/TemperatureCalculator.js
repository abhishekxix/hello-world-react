import React from 'react';
import TemperatureInput from './TemperatureInput';
import Convertor from './Convertor';

function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water would not boil.</p>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ temperature, scale: 'c' });
  };

  handleFaranheitChange = (temperature) => {
    this.setState({ temperature, scale: 'f' });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f'
        ? Convertor.tryConvert(temperature, Convertor.toCelsius)
        : temperature;

    const faranheit =
      scale === 'c'
        ? Convertor.tryConvert(temperature, Convertor.toFaranheit)
        : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        ;
        <TemperatureInput
          scale="f"
          temperature={faranheit}
          onTemperatureChange={this.handleFaranheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
