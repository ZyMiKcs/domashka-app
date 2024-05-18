import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

export default function MyDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button
            className={`border border-[#E0E0E0] rounded-xl text-[13px] font-medium pl-3 pr-2 flex items-center gap-1 focus:outline-[#526ED3] focus:outline-2 h-8`}
            onClick={onClick}
            ref={ref}
        >
            {value}
        </button>
    ));
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
}
