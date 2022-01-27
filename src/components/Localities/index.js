import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './localities.css';

const localities = [
    {
        id: 1,
        place: "C Scheme (315 places)"
    },
    {
        id: 2,
        place: "Malviya Nagar (969 places)"
    },
    {
        id: 3,
        place: "Tonk Road (270 places)"
    },
    {
        id: 4,
        place: "Vaishali Nagar (996 places)"
    },
    {
        id: 5,
        place: "MI Road (162 places)"
    },
    {
        id: 6,
        place: "Mansarovar (1228 places)"
    },
    {
        id: 7,
        place: "Raja Park (430 places)"
    },
    {
        id: 8,
        place: "Bani Park (122 places)"
    },
    {
        id: 9,
        place: "Bais Godam (114 places)"
    },
    {
        id: 10,
        place: "Adarsh Nagar (132 places)"
    },
    {
        id: 11,
        place: "Ajmer Highway (136 places)"
    },
    {
        id: 12,
        place: "Lal Kothi (100 places)"
    },
    {
        id: 13,
        place: "Gopalbari (56 places)"
    },
    {
        id: 14,
        place: "Sodala (345 places)"
    },
    {
        id: 15,
        place: "Shyam Nagar (295 places)"
    },
    {
        id: 16,
        place: "Sindhi Camp (112 places)"
    },
    {
        id: 17,
        place: "Pink City (242 places)"
    },
    {
        id: 18,
        place: "Amer (31 places)"
    },
    {
        id: 19,
        place: "Civil Lines (59 places)"
    },
    {
        id: 20,
        place: "Chitrakoot (278 places)"
    },
    {
        id: 21,
        place: "Narayan Singh Circle (22 places)"
    },
    {
        id: 22,
        place: "Sikar Road (275 places)"
    },
    {
        id: 23,
        place: "Vidhyadhar Nagar (353 places)"
    },
    {
        id: 24,
        place: "Bapu Nagar (71 places)"
    },
    {
        id: 25,
        place: "Amer Road (100 places)"
    },
    {
        id: 26,
        place: "Jhotwara (1082 places)"
    },
    {
        id: 27,
        place: "Shastri Nagar (218 places)"
    },
    {
        id: 28,
        place: "Kukas (42 places)"
    },
    {
        id: 29,
        place: "Jawahar Nagar (127 places)"
    },
    {
        id: 30,
        place: "Khatipura Road (203 places)"
    },
];


const Localities = () => {
    return (
        <Router>
            <div className="localities-wrapper">
            <h2>Popular localities in and around <b>Jaipur</b></h2>
            <div className="localities-row">
                {localities.map((locality)=>{
                    return(
                        <div className="localities-col">
                            <h4>{locality.place}</h4>
                            <Link to="/"><i class="fa fa-angle-right"></i></Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
        </Router>
    )
}

export default Localities