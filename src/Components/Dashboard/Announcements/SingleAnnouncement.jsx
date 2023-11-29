

const SingleAnnouncement = ({ index, announcement }) => {
    const { title, date, description } = announcement
    return (
        <div className="card glass  bg-[#265073] text-[#ECF4D6] shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Announcement No.{index+1}</h2>
                <h2 className="card-title">Date:{date}</h2>
                <h2 className="card-title">Title:{title}</h2>
                <p>Description: {description}</p>
                
            </div>
        </div>

    );
};

export default SingleAnnouncement;