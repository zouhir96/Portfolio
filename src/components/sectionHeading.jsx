const SectionHeading = ({ title, subtitle, description }) => {
    return (
        <div className="flex flex-col gap-3 mb-6 mt-20">
            <h5 className="m-auto font-semibold">{title}</h5>
            <h2 className="m-auto text-4xl font-bold mb-2 text-center">{subtitle}</h2>
            <h5 className="m-auto text-center" dangerouslySetInnerHTML={{ __html: description }}></h5>
        </div>
    );
}

export default SectionHeading;
