import './NumberField.scss';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const NumberField = ({ className, value, onDecrease, onIncrease }: { className?: string, value: string | number, onDecrease: any, onIncrease: any }) => {
    return (
        <div className={`number-field ${className || ""}`}>
            <button onClick={onDecrease} type='button' className='btn'>
                <AiOutlineMinus />
            </button>
            <span className='number-value'>{value}</span>
            <button onClick={onIncrease} type='button' className='btn'>
                <HiOutlinePlusSm />
            </button>
        </div>
    )
}

export default NumberField;