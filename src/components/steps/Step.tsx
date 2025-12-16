interface StepsProps {
    number: number;
    title: string;
    description: string;
    icon?: string;
}
export const Step = ({number, title, description, icon}: StepsProps) => {
    return (
        <>
        <div className="flex flex-col h-[500px] w-[300px] items-center justify-center p-8 rounded-lg shadow-md relative bg-[#EDE8DE]">
            {icon && <img src={icon} alt={`Step ${number} icon`} className="absolute -top-24 left-1/2 transform -translate-x-1/2 h-[170px] z-10" />}
            <h3 className="text-[36px] text-[var(--color-blue)] font-semibold">שלב {number}</h3>
            <h3 className="text-[36px] text-[var(--color-dark-blue)] font-semibold mb-12">{title}</h3>
            <p className="text-[24px] text-right">{description}</p>
        </div>
        </>
    );
}