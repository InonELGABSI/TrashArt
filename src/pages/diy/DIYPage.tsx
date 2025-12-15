import { Flow } from './Flow';
import { AIGen } from './AIGen';

export const DIYPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <Flow />
            <AIGen />
        </div>
    );
}