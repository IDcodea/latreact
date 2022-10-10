import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import PlaceContentCenter from './components/PlaceContentCenter';

export default function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}
