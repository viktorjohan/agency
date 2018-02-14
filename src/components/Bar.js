import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import '../css/App.css';

const data = [
  {
    country: 'A',
    'Hot dog': 91,
    'Hot dogColor': 'hsl(111, 70%, 50%)',
    Burger: 193,
    BurgerColor: 'hsl(199, 70%, 50%)',
    Sandwich: 112,
    SandwichColor: 'hsl(113, 70%, 50%)',
    Kebab: 1,
    KebabColor: 'hsl(358, 70%, 50%)',
    Fries: 2,
    FriesColor: 'hsl(132, 70%, 50%)',
    Donut: 28,
    DonutColor: 'hsl(196, 70%, 50%)'
  },
  {
    country: 'B',
    'Hot dog': 2,
    'Hot dogColor': 'hsl(95, 70%, 50%)',
    Burger: 47,
    BurgerColor: 'hsl(232, 70%, 50%)',
    Sandwich: 149,
    SandwichColor: 'hsl(75, 70%, 50%)',
    Kebab: 199,
    KebabColor: 'hsl(127, 70%, 50%)',
    Fries: 165,
    FriesColor: 'hsl(301, 70%, 50%)',
    Donut: 116,
    DonutColor: 'hsl(101, 70%, 50%)'
  },
  {
    country: 'C',
    'Hot dog': 164,
    'Hot dogColor': 'hsl(25, 70%, 50%)',
    Burger: 200,
    BurgerColor: 'hsl(242, 70%, 50%)',
    Sandwich: 192,
    SandwichColor: 'hsl(267, 70%, 50%)',
    Kebab: 97,
    KebabColor: 'hsl(144, 70%, 50%)',
    Fries: 169,
    FriesColor: 'hsl(331, 70%, 50%)',
    Donut: 5,
    DonutColor: 'hsl(85, 70%, 50%)'
  },
  {
    country: 'D',
    'Hot dog': 194,
    'Hot dogColor': 'hsl(265, 70%, 50%)',
    Burger: 29,
    BurgerColor: 'hsl(98, 70%, 50%)',
    Sandwich: 186,
    SandwichColor: 'hsl(140, 70%, 50%)',
    Kebab: 100,
    KebabColor: 'hsl(324, 70%, 50%)',
    Fries: 50,
    FriesColor: 'hsl(193, 70%, 50%)',
    Donut: 162,
    DonutColor: 'hsl(346, 70%, 50%)'
  },
  {
    country: 'E',
    'Hot dog': 150,
    'Hot dogColor': 'hsl(38, 70%, 50%)',
    Burger: 11,
    BurgerColor: 'hsl(114, 70%, 50%)',
    Sandwich: 137,
    SandwichColor: 'hsl(134, 70%, 50%)',
    Kebab: 193,
    KebabColor: 'hsl(152, 70%, 50%)',
    Fries: 151,
    FriesColor: 'hsl(298, 70%, 50%)',
    Donut: 44,
    DonutColor: 'hsl(320, 70%, 50%)'
  },
  {
    country: 'F',
    'Hot dog': 57,
    'Hot dogColor': 'hsl(198, 70%, 50%)',
    Burger: 42,
    BurgerColor: 'hsl(68, 70%, 50%)',
    Sandwich: 1,
    SandwichColor: 'hsl(291, 70%, 50%)',
    Kebab: 103,
    KebabColor: 'hsl(284, 70%, 50%)',
    Fries: 49,
    FriesColor: 'hsl(62, 70%, 50%)',
    Donut: 127,
    DonutColor: 'hsl(289, 70%, 50%)'
  }
];

class Bar extends Component {
  render(){
    return (
      <div className="bar__wrapper">
        <h4>Stats</h4>
        <ResponsiveBar
        data={data}
        keys={[
            "Hot dog",
            "Burger",
            "Sandwich",
            "Kebab",
            "Fries",
            "Donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colors="pastel1"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "Fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "Sandwich"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "",
            "legendPosition": "center",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "",
            "legendPosition": "center",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 120,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemsSpacing": 2,
                "symbolSize": 20
            }
        ]}
    />
      </div>
    )
  }
}

export default Bar;
