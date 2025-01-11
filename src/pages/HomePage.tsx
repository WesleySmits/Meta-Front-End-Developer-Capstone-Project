import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Little Lemon - Mediterranean Restaurant based in Rotterdam</title>
                <meta
                    name="description"
                    content="Little Lemon is a Mediterranean restaurant based in Rotterdam. We serve delicious food and drinks."
                />
            </Helmet>
            <div>
                <h1>Welcome to Little Lemon</h1>
                <p>Your favorite Mediterranean dining experience awaits.</p>
            </div>
        </>
    );
};

export default HomePage;
