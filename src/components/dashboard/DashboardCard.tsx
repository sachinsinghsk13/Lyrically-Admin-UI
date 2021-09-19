const DashboardCard = (props: any) => {
    return (
        <div className="shadow border d-flex rounded p-3 text-dark my-3">
           <div className="card-info d-flex flex-column">
                <div className="card-heading d-flex align-items-center">
                    <i className="fas fa-cog fa-2x px-2"></i>
                    <span className="h2">Artists</span>
                </div>
                <div className="card-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus similique, ab rerum ad quod in perferendis quidem nulla laboriosam. Blanditiis hic illo tempore doloremque obcaecati quos nemo consequuntur officia?
                </div>
           </div>
           <div className="card-stat d-flex flex-column justify-content-center">
                <span className="display-3">34</span>
           </div>
        </div>
    );
}

export default DashboardCard;