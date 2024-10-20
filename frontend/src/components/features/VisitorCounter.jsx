import { useEffect, useState } from 'react';

function VisitorCounter() {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        let count = localStorage.getItem('visitorCount');

        if (count) {
            count = parseInt(count, 10) + 1;
        } else {
            count = 1;
        }

        localStorage.setItem('visitorCount', count);
        setVisitorCount(count);
    }, []);

    return (
        <div className="p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800">Visitor Count</h1>
            <p className="text-xl mt-5 text-gray-600">Number of Visitors: {visitorCount}</p>
        </div>
    );
}

export default VisitorCounter;
