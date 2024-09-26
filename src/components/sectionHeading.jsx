const SectionHeading = ({ title, subtitle, description }) => {
    return (
        <div className="flex flex-col gap-3 mb-4 mt-4">
            <h5 className="m-auto font-semibold">{title}</h5>
            <h2 className="m-auto text-4xl font-bold mb-2 text-center">{subtitle}</h2>
        </div>
    );
}

export default SectionHeading;
