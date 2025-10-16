export const SectionHeader = ({ title, lastword, subtitle }) => {
    return (
        <>
            <h2 className="section-title" data-aos="fade-up">
                {title} <span className="text-red">{lastword}</span>
            </h2>
            {subtitle && (
                <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                    {subtitle}
                </h3>
            )}
        </>
    );
};

export default SectionHeader;