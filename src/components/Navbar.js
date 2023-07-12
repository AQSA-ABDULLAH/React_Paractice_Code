import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='d-flex justify-content-between p-2 mt-4 bd-highlight'>
            <div>
                <Link class="navbar-brand" to="/" style={{fontSize:"40px"}}>To Do App</Link>
            </div>
            <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item list-group-item " style={{borderRadius:"150px"}}>
                        <Link class="nav-link active " aria-current="page" to="/">All</Link>
                    </li>
                    <li class="nav-item list-group-item " style={{borderRadius:"150px"}}>
                        <Link class="nav-link" to="/pending">Pending</Link>
                    </li>
                    <li class="nav-item list-group-item" style={{borderRadius:"150px"}}>
                        <Link class="nav-link" to="#">InProgress</Link>
                    </li>
                    <li class="nav-item list-group-item " style={{borderRadius:"150px"}}>
                        <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Completed</Link>
                    </li>
                </ul>
            </div>

            <div className='d-flex'>
                <button class="btn btn-primary">Create a New Todo</button>
            </div>
        </div>
    )
}
