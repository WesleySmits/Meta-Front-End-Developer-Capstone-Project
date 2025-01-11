import { Helmet } from 'react-helmet-async';

const ReservePage = () => {
    return (
        <>
            <Helmet>
                <title>Reserve a Table - Little Lemon</title>
                <meta
                    name="description"
                    content="Book your table at Little Lemon easily with our online reservation system."
                />
            </Helmet>
            <div>
                <h1>Reserve a Table</h1>
                <p>Book your table with ease using our online reservation system.</p>
            </div>
        </>
    );
};

export default ReservePage;
