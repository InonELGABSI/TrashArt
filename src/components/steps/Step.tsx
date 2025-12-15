interface StepsProps {
    number: number;
    title: string;
    description: string;
    icon?: string;
}
export const Step = ({number, title, description, icon}: StepsProps) => {
    return (
        <>
        <div className="flex flex-col h-[400px] w-[220px] items-center justify-center p-4 rounded-lg shadow-md relative bg-[#E4DFD3]">
            {icon && <img src={icon} alt={`Step ${number} icon`} className="absolute -top-24 left-1/2 transform -translate-x-1/2 h-[130px] z-10" />}
            <h3 className="text-xl font-semibold mb-2">שלב {number}</h3>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
        </>
    );
}