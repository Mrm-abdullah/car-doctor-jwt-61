import ServiceCard from "./ServiceCard";
import useServices from "../../Hooks/useServices";

const Servicess = () => {
    const services = useServices()
    return (
        <div className=" my-12">
            <div className="text-center space-y-5 max-w-[650px] mx-auto">
                <h3 className="text-[#FF3811] font-bold text-xl">Service</h3>
                <h2 className="font-bold text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-5">
                {
                    services.map(services => <ServiceCard key={services._id} services={services} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Servicess;