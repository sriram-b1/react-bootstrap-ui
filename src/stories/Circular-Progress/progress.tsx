import Reactconst, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import './progress.scss'

const ProgressBar = (props: any) => {
    const circleRef = useRef<any>(null);
    const dialColor = '#DDDDDD';
    const [progressColor, setProgressColor] = useState('');
    const {
        size,
        progress,
        limits,
        label,
    } = props;

    const strokeWidth = 15;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState(circumference);
    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        limits.map((limit:any) => {
            if (progress >= limit.value) {
                setProgressColor(limit.color)
            }
        })

        circleRef.current.style = 'transform: rotate(90deg)';
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease';

    }, [progress, setOffset, circumference, offset, label])
    return (
        <div>
            <svg className="circular-progress" width={size} height={size}>
                <circle className="circular-bg" stroke={dialColor} cx={center} cy={center} r={radius} strokeWidth={strokeWidth}></circle>
                <circle ref={circleRef} className="circle" stroke={progressColor} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset}></circle>
                <text x={center} y={-center} className="label percent">
                    <title>{progress}%</title>
                    {progress}%
                </text>
                <text x={center} y={-center + 35} className="label detail">
                    <title>{label}</title>
                    {label.length > 15 ? label.slice(0, 15) + '...' : label}
                </text>
            </svg>
        </div>
    )
}

export default ProgressBar