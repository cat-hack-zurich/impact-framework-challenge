const { parse } = require('csv-parse/sync');

const fs = require('fs');
const path = require('path');

const BUFFER = bufferFile('./ElectricityMap-2023-hourly.csv');

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath));
}

const SwissGridPlugin = () => {
  const metadata = {
    kind: 'execute',
  };

  const execute = async (inputs) => {

    let swissGridData = parse(BUFFER, {
      columns: true,
      skip_empty_lines: true,
    });
  
    return inputs.map((input) => {

      let outputValue = swissGridData.find(
        (d) => equalsDateTime(d['Datetime (UTC)'], input['timestamp'])
      )['Carbon Intensity (direct)'];

      return {
        ...input,
        ['grid/carbon-intensity2']: outputValue,
      };
    });
  };

  return {
    metadata,
    execute,
  };
};

function equalsDateTime(timeGrid, timeInput) {
  return (
    new Date(timeGrid).getMonth() === new Date(timeInput).getMonth() &&
    new Date(timeGrid).getDay() === new Date(timeInput).getDay() &&
    new Date(timeGrid).getHours() === new Date(timeInput).getHours()
  );
}

exports.SwissGridPlugin = SwissGridPlugin;
