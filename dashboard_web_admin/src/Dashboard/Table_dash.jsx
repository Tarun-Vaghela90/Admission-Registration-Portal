import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/dashboard.css';

export default function Table_dash() {
    const data = [
        {
            "Name": "James",
            "Profile": "jam_profile",
            "First": "James",
            "Last": "Smith",
            "Document": "doc1",
            "Status": "Active"
        },
        {
            "Name": "Lily",
            "Profile": "lily_profile",
            "First": "Lily",
            "Last": "Johnson",
            "Document": "doc2",
            "Status": "Inactive"
        },
        {
            "Name": "Michael",
            "Profile": "michael_profile",
            "First": "Michael",
            "Last": "Williams",
            "Document": "doc3",
            "Status": "Pending"
        },
        {
            "Name": "Emma",
            "Profile": "emma_profile",
            "First": "Emma",
            "Last": "Brown",
            "Document": "doc4",
            "Status": "Active"
        },
        {
            "Name": "Oliver",
            "Profile": "oliver_profile",
            "First": "Oliver",
            "Last": "Jones",
            "Document": "doc5",
            "Status": "Inactive"
        }
    ];

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Determine the data to display for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <table className="table table-hover rounded mt-5 text-center">
                <thead className='table-dark'>
                    <tr>
                        <td>#</td>
                        <td>Profile</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Documents</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((user, index) => (
                        <tr key={index}>
                            <td>{startIndex + index + 1}</td>
                            <td>{user.Profile}</td>
                            <td>{user.First}</td>
                            <td>{user.Last}</td>
                            <td>{user.Document}</td>
                            <td>{user.Status}</td>
                            <td>
                                <div className="dropdown">
                                    <a className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination className="justify-content-center mt-4">
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </>
    );
}
