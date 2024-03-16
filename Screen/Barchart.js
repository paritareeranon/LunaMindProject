import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';

const Barchart = () => {
  const data = [50, 80, 60, 100, 75, 90, 120];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <View style={{ height: 200, padding: 20 }}>
      <View style={{ flexDirection: 'row', height: 200 }}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: 'rgba(0, 128, 255, 0.7)' }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid />
          </BarChart>
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => labels[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View>
      </View>
    </View>
  );
};

export default Barchart;
