import { BedOutline, EarthOutline, ShieldCheckmarkOutline } from "react-ionicons";


const Features = () => {

    const featuresList = [
       { icon: 
        (<BedOutline color="#60a5fa" style={{width: 60, height: 60}} />
        ),
        title: "Hotels on the House",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas enim voluptatum numquam quaerat quod nostrum quisquam vel laborum unde hic soluta ex, iure molestias delectus? Dolor iusto perspiciatis reiciendis ratione."
    }, 
       { icon: 
        (<ShieldCheckmarkOutline color="#60a5fa" style={{width: 60, height: 60}} />
        ),
        title: "Safe To Trust",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas enim voluptatum numquam quaerat quod nostrum quisquam vel laborum unde hic soluta ex, iure molestias delectus? Dolor iusto perspiciatis reiciendis ratione."
    },
       { icon: 
        (<EarthOutline color="#60a5fa" style={{width: 60, height: 60}} />
        ),
        title: "Worldwide Customers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas enim voluptatum numquam quaerat quod nostrum quisquam vel laborum unde hic soluta ex, iure molestias delectus? Dolor iusto perspiciatis reiciendis ratione."
    }, 
    ];

  return (
    <div className="flex w-full py-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
        <div className="flex flex-col w-full items-center">
            <span className="font-semibold text-blue-500">Our Features</span>
            <span className="font-semibold text-slate-700 text-3xl mt-1">Our priceless Features</span>
            <p className="text-center mt-4 max-w-[400px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam excepturi quisquam maxime reprehenderit officia, ipsum exercitationem alias, corporis qui fuga impedit, incidunt veniam earum laborum? Quam sint enim exercitationem ipsa.
            </p>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-0 gap-5">
            {featuresList.map((feature) => {
                return <div className="bg-white py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[18px] transition-all duration-300 cursor-pointer hover:scale-[1.05]" key={feature.title}
                style={{boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)"}}>
                    {feature.icon}
                    <span className="font-semibold text-gray-700 text-[21px]">
                        {feature.title}
                    </span>
                    <span className="text-cnter max-w-[360px] leading-7">
                        {feature.description}
                    </span>
                </div>
            })}
        </div>
    </div>
  )
}

export default Features