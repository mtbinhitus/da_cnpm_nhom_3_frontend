import React, { useState, useEffect, useRef } from 'react';
import { Button, Stack } from '@mui/material';

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
};

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return null;
    }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');

export default function Timer(props) {
    const [secondsRemaining, setSecondsRemaining] = useState(props.time);
    const [status, setStatus] = useState(props.status);
    console.log(props.status);

    const secondsToDisplay = secondsRemaining % 60;
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
    const minutesToDisplay = minutesRemaining;

    // const handleStart = () => {
    //     setStatus(STATUS.STARTED);
    // };
    // const handleStop = () => {};
    // const handleReset = () => {
    //     setStatus(STATUS.STOPPED);
    //     setSecondsRemaining(props.time);
    // };

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);
            } else {
                setStatus(STATUS.STOPPED);
                props.setEndFromTimer(STATUS.STOPPED);
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    );
    return (
        <Stack mt={1} mb={1} className="Timer" alignItems="center" direction="row" spacing={2}>
            <Button variant="contained" color={status === STATUS.STARTED ? 'success' : 'error'}>
                {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
            </Button>
        </Stack>
    );
}
