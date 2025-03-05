import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <h1>Home </h1>
            <p>
                <Link to="/exerciseSearch">Browse Exercises</Link>
            </p>
        </div>
    )
}

export default HomePage;