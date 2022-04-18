import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from './../Service/Service';


const Services = () => {

    // services data state
    const [services, setServices] = useState([]);

    // services data load
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section className='container my-5'>
            <h1 className='service-title text-center mb-5 pt-2'>My Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </section>
    );
};

export default Services;