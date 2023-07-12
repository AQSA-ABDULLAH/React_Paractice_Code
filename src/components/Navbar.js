import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='d-flex justify-content-between p-2 mt-4 bd-highlight'>
            <div>
                <Link className="navbar-brand" to="/" style={{ fontSize: "40px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M17.8 18.1L10.4 25.4L6.2 21.3L4 23.5L10.4 29.9L20 20.3L17.8 18.1ZM17.8 5.10001L10.4 12.4L6.2 8.30001L4 10.5L10.4 16.9L20 7.30001L17.8 5.10001ZM17.8 31.1L10.4 38.4L6.2 34.3L4 36.5L10.4 42.9L20 33.3L17.8 31.1Z" fill="#3F51B5" />
                        <path d="M24 22H44V26H24V22ZM24 9H44V13H24V9ZM24 35H44V39H24V35Z" fill="#90CAF9" />
                    </svg>
                    To Do App
                </Link>
            </div>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item list-group-item" style={{ borderRadius: "150px" }}>
                        <Link className="nav-link active" aria-current="page" to="/">All</Link>
                    </li>
                    <li className="nav-item list-group-item" style={{ borderRadius: "150px" }}>
                        <Link className="nav-link" to="/pending">Pending</Link>
                    </li>
                    <li className="nav-item list-group-item" style={{ borderRadius: "150px" }}>
                        <Link className="nav-link" to="#">InProgress</Link>
                    </li>
                    <li className="nav-item list-group-item" style={{ borderRadius: "150px" }}>
                        <Link className="nav-link" to="/Completed">Completed</Link>
                    </li>
                </ul>
            </div>

            <div className='d-flex flex-column align-items-end'>
                <button className="btn" onClick={toggleDropdown}>
                    Create a New Todo
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16Z" fill="black" />
                    </svg>

                </button>

                {showDropdown && (
                    <div className="dropdown-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "2px", zIndex: 100 }}>
                        <label htmlFor="title" style={{ marginBottom: "4px" }}>Title:</label>
                        <input type="text" id="title" placeholder="Enter title" style={{ marginBottom: "10px" }} />
                        <label htmlFor="description" style={{ marginBottom: "4px" }}>Description:</label>
                        <input type="text" id="description" placeholder="Enter description" style={{ marginBottom: "10px" }} />
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

