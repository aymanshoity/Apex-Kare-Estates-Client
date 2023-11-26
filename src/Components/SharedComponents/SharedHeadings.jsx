

const SharedHeadings = ({heading,subheading}) => {
    return (
        <div className="w-3/12  mx-auto">
            <p className='text-center text-[#265073] font-bold '>{subheading}</p>


            <h1 className='text-4xl mb-10  text-center text-[#265073]  border-y-4 border-[#265073] font-extrabold'>{heading}</h1>

        </div>
    );
};

export default SharedHeadings;