

const SectionHeader = ({header,subHeader}) => {
    return (
        <div className="md:w-1/2 lg:w-1/4 mx-auto mb-8 text-center">
            <p className="text-yellow-500 italic mb-2">--- {subHeader} ---</p>
            <h3 className="text-3xl uppercase border-y-4 p-3 font-semibold">{header}</h3>
        </div>
    );
};

export default SectionHeader;