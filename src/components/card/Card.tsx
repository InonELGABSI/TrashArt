export const Card = ({ title, description, image }: { title: string; description: string; image: string }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm">
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}