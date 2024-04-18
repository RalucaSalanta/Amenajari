import "./SkillsStyles.css"
import SkillsData from "./SkillsData";

function Skills(){
    return(
        <div className="skills">
            <h1>What can we do?</h1>
            <p>Pretty much everything, below you can find a sum up.</p>
            <div className="skillscard">
              <SkillsData
              image={"https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              heading= "Interior Renovation Specialist"
              text="SI Design is a master of indoor transformations, specializing in revitalizing living spaces with expertise in interior renovations.
               From upgrading kitchens and bathrooms to refreshing living areas with new flooring and paint, they bring creativity and precision to every project. 
               With a keen eye for design and a commitment to quality craftsmanship, they turn your interior dreams into reality, ensuring that your home reflects your style and meets your functional needs with finesse.."
             />
              <SkillsData
              image={"https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              heading= "Plumbing Expert"
              text="This contractor is your go-to expert for all water-related installations within your home. Whether you're renovating a bathroom, kitchen, or laundry room, they specialize in the precise installation of plumbing fixtures such as sinks, faucets, toilets, showers, and bathtubs. 
              With meticulous attention to detail and a focus on functionality and efficiency, they ensure that your water installations not only look great but also work flawlessly for years to come. 
              From coordinating with other trades to adhering to building codes and safety standards, they handle every aspect of your indoor water installation needs, providing peace of mind and quality craftsmanship every step of the way.."
              />
              <SkillsData
              image={"https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              heading= "Exterior Enhancement Expert"
              text="SI Design also focuses on elevating your outdoor living experience, specializing in exterior renovations and enhancements. 
              Whether you're envisioning a new deck or patio for entertaining, a lush landscape design to boost curb appeal, or practical upgrades like siding or roofing, they have the expertise to bring your outdoor vision to life. 
              With a dedication to durability, aesthetics, and environmental harmony, they transform your exterior spaces into inviting retreats that complement your lifestyle and enhance your home's value."
              />
            </div>  
            </div>
    )
}
export default Skills;