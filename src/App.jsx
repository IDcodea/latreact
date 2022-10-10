import { useState } from 'react';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';

export default function App() {
    const [count, setCount] = useState(0);

    function handleCLick() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <PlaceContentCenter>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleCLick}>Count+1</Button>
                <Button
                    onClick={() => {
                        handleCLick();
                        handleCLick();
                        handleCLick();
                    }}>
                    Count+3
                </Button>
            </div>
        </PlaceContentCenter>
    );
}
