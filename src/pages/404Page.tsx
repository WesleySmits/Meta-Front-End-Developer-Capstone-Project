import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found - Little Lemon</title>
                <meta
                    name="description"
                    content="The page you are looking for does not exist. Return to the home page."
                />
            </Helmet>
            <div>
                <h1>404</h1>
                <p>Page not found. The link you followed may be broken or the page may have been removed.</p>
            </div>
        </>
    );
};

export default NotFoundPage;
