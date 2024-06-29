
import {
    VictoryChart,
    VictoryBar,
    VictoryStack,
    VictoryAxis,
    VictoryLabel
} from "victory";

const dataA = [
    { x: "Short of Goal", y: 47, z: 40 },
    { x: "Total Shorts", y: 30, z: 40 },
    { x: "Television", y: 38, z: 39 },
    { x: "Blocked Shorts", y: 37, z: 36 },
    { x: "Short Insidebox", y: 25, z: 24 },
    { x: "Fouls", y: 19, z: 18 },
    { x: "Corner cicks", y: 15, z: 15 },
    { x: "Offsides", y: 13, z: 14 },
    { x: "Yellow Cards", y: 12, z: 12 }
];


// const dataB = dataA.map((point) => {
//     const y = Math.round(point.y + 3 * (Math.random() - 0.5));
//     return { ...point, y };
// });

const width = 500;
const height = 200;

const VictorChart = () => {
    return (
        <VictoryChart horizontal height={height} width={width} padding={40}>
            <VictoryStack style={{ data: { width: 3 }, labels: { fontSize: 3 } }}>
                <VictoryBar
                    style={{ data: { fill: "#387ADF" } }}
                    data={dataA}
                    y={(data) => -Math.abs(data.y)}
                    labels={({ datum }) => `${Math.abs(datum.y)}%`}
                    labelComponent={<VictoryLabel dx={-20} />}
                />
                <VictoryBar
                    style={{ data: { fill: "#06D001" } }}
                    data={dataA}
                    labels={({ datum }) => `${Math.abs(datum.z)}%`}
                    labelComponent={<VictoryLabel dx={20} />}
                />
            </VictoryStack>

            <VictoryAxis
                style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fontSize: 3, fill: "black" },
                }}
                tickLabelComponent={<VictoryLabel x={width / 2} dy={-4} textAnchor="middle" />}
                tickValues={dataA.map((point) => point.x)}

            />
        </VictoryChart>
    );
}

export default VictorChart;