import { CircleCheck } from "lucide-react";

const Features = ({element}) => {
    return (
        <p className="flex gap-2 "> <CircleCheck className="w-4 text-green-500"/>{element}</p>
    );
};

export default Features;