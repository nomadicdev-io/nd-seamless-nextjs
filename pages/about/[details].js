import {useRouter} from 'next/router';

const Details = ()=> {

    const routes = useRouter();
    
    console.log(routes.query.details)

    return (
        <h1>Detaiils Here: {routes.query.details}</h1>
    )
}

export default Details;