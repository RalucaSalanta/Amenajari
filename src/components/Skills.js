import "./SkillsStyles.css"
import SkillsData from "./SkillsData";

function Skills(){
    return(
        <div className="skills">
            <h1>Color or no color?</h1>
            <p>This are the trending colors of this year to help and ispire you.</p>
            <div className="skillscard">
              <SkillsData
              image={"https://hips.hearstapps.com/hmg-prod/images/dark-green-1658437247-657b1d549616d.png?crop=1xw:1xh;center,top&resize=980:*"}
              heading= "Shades of Green"
              text="'Adjacent to the sustainability trend, we anticipate shades of green being very popular in 2024,' say Amanda Gunawan and Joel Wong of OWIU Design.
                     'Depending on the shade, green can be used as a base neutral. 
                      A really dark forest green can read black, while a light mint green could read white depending on the lighting and what colors you pair next to them.
                     'Take this bathroom by designer Mark Lavender of M. Lavender Interiors as proof. 
                      The glossy wall painted in Benjamin Moore's Black Forest Green acts as a dark neutral, especially against the bright white vanity."
             />
              <SkillsData
              image={"https://hips.hearstapps.com/hmg-prod/images/color-trends-2024-657b27c8c12a2.png?crop=0.444xw:1.00xh;0.466xw,0&resize=980:*"}
              heading= "Warm, Earthy Color Palettes"
              text="Many designers are seeing continued interest in earthy colors that create warmth. 
              In this dining room by architecture and interior design firm Kaminski + Pew, moody yet cozy neutrals complement the outdoor landscape beyond the windows. 
              According to founders Kevin Kaminski and Alexis Pew, 'We're moving toward more creams, browns, rusts, and muted greens.'
              'Trends have continued to shift away from cooler gray tones toward warmer color palettes found in nature,' adds designer Lisa Schwert of Innate Studio. 
              'I love a palette that changes with natural light; you're never sure what color it is.'"
              />
              <SkillsData
              image={"https://hips.hearstapps.com/hmg-prod/images/hbx110123wh-petiteroom-002-6543ccd5134fe.jpg?crop=0.8787346221441125xw:1xh;center,top&resize=980:*"}
              heading= "Bold Hues as Neutrals"
              text="Green isn't the only color we'll see add intrigue in place of expected neutrals. 
                   'Bold hues that can act as neutrals throughout a home due to a consistent palette will be making a comeback, such as deep greens, khakis, marigold, and rich purples like eggplant and plum,' says Jodi Berger of JLA Designs. 
                   'I can see my clients wanting to use these statement hues in entrance spaces or in smaller spaces, like powder rooms or offices, to make a big impression without having to commit to color like they would in larger, open areas in their homes.'
                    In this ladies' lounge by designers Marita Simmons and Krysta Gibbons of Kipling House, deep purple walls and accents in white metal, faux burl wood, and dramatic stone compose a lavish lair."
              />
            </div>  
            </div>
    )
}
export default Skills;