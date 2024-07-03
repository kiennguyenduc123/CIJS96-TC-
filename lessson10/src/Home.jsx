import {Link, useSearchParams} from 'react-router-dom'
const Home = () => {
    const [query,setQuery] = useSearchParams();

    return (
        <h1>Chào mừng đến với bình nguyên vô tận, {query.get('user')} 
            <Link to="/app">App</Link>
        </h1>
    )
}

export default Home