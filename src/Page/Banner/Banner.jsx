const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url("/public/top-wedding-planners-in-viet-nam-1.jpg")',
    };
    
    return (
        <div className="h-96 w-full bg-blue-100">
            <div
                className="h-full w-full bg-cover bg-no-repeat bg-center"
                style={bannerStyle}>
            </div>
        </div>
        
    );
};

export default Banner;
