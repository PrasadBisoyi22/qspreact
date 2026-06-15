import Navbar from './Navbar';
import Slides from './Slides';

const PropsConditionaltask = () => {
    const data = [
    {
        type: 'video',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4',
        label: 'MAY 22, 2026',
        heading: "STARSHIP'S TWELFTH FLIGHT TEST",
        description: '', // Left blank to match the minimalist look of the hero section
        buttonText: 'WATCH',
        buttonLink: '#watch',

    },
    {
        type: 'video',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4',
        label: '',
        heading: 'MAKING LIFE MULTIPLANETARY',
        description: 'SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.',
        buttonText: 'EXPLORE',
        buttonLink: '#explore'
    },
    {
        type: 'image',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg',
        label: '',
        heading: 'REVOLUTIONIZING SPACE TECHNOLOGY',
        description: 'SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.',
        buttonText: 'LEARN MORE',
        buttonLink: '#learn-more',
    },
    {
        type: 'video',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4',
        label: '',
        heading: "WORLD'S LEADING LAUNCH SERVICE PROVIDER",
        description: 'SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.',
        buttonText: 'RESERVE YOUR RIDE',
        buttonLink: '#reserve',
    },
    {
        type: 'image',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg',
        label: '',
        heading: 'ADVANCING HUMAN SPACEFLIGHT',
        description: 'Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.',
        buttonText: 'JOIN A MISSION',
        buttonLink: '#join-mission',
        
    },
    {
        type: 'video',
        url: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4',
        label: '',
        heading: 'DELIVERING HIGH-SPEED INTERNET FROM SPACE',
        description: 'Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.',
        buttonText: 'ORDER NOW',
        buttonLink: '#order-starlink'
    }
];

    return (
       <div>
        <Navbar/>
            {data.map((item, index) => (
                <Slides okey={index} slideData={item} />
            ))}
        </div>
    );
}
export default PropsConditionaltask;