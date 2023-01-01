import { Chart, ArcElement, Legend, Title, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(Tooltip, Title, ArcElement, Legend);

const PieChart = ({ IPP, MMO, TQ }) => {
    const data = {
        datasets: [{
            data: [IPP, MMO, TQ],
            backgroundColor: [
                '#5689C0',
                '#974063',
                '#46A094'
            ]
        }],
        labels: [
            'Informática',
            "Maestro Mayor de Obra",
            "Química"
        ]
    };

    return (
        <div className="md:w-1/3 md:h-1/3">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;