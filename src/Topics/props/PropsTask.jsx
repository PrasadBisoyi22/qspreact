import Card from "./Card";
import './proptask.css'

const PropsTask = () => {

const data = [
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Jonathan West",
    username: "@Jonathan_West",
    bio: "Product-focused UI/UX designer blending user research, interaction design, and visual craft to build intuitive web and mobile experiences.",
    stats: { post: "629", following: "201", followers: "124k" }
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Marcus Vance",
    username: "@marcus_v",
    bio: "Building the future of decentralized computing at NexusCloud. Angel investor, father of two, and casual marathon runner. Let's build.",
    stats: { post: "1,412", following: "890", followers: "310k" }
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    name: "Elena Rostova",
    username: "@elena_wanders",
    bio: "Visual storyteller exploring remote corners of the world. Capturing landscapes, culture, and human emotion through a 35mm lens. 🌍",
    stats: { post: "432", following: "412", followers: "89.5k" }
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    name: "Devon Lane",
    username: "@devon_codes",
    bio: "Building micro-SaaS products in public. Open-source maintainer, TypeScript lover, and keyboard enthusiast. Coffee is my fuel. ☕",
    stats: { post: "88", following: "1,024", followers: "12.3k" }
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Sarah Jenkins",
    username: "@sj_fit",
    bio: "Helping busy professionals reclaim their health through sustainable nutrition and strength training. Certified PT & Nutritionist. 💪",
    stats: { post: "2,150", following: "512", followers: "441k" }
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    name: "Mia Chen",
    username: "@miachen_draws",
    bio: "Concept artist making whimsical worlds and cyberpunk illustrations. Open for commercial work and freelance commissions. ✨",
    stats: { post: "312", following: "156", followers: "67.2k" }
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    name: "Chef Alessandro",
    username: "@ale_cooks",
    bio: "Michelin-starred head chef bringing authentic Tuscan flavors to NYC. Author of the cookbook 'Simplicity on a Plate'. 🍝",
    stats: { post: "745", following: "320", followers: "195k" }
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    name: "Robert Sterling",
    username: "@sterling_capital",
    bio: "Demystifying personal finance, investing, and wealth creation for the everyday worker. Ex-Wall Street portfolio manager.",
    stats: { post: "1,104", following: "98", followers: "2.1M" }
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Studio Form ",
    username: "@studio_form",
    bio: "Award-winning sustainable architecture and interior design studio based in Copenhagen. We design space with intention.",
    stats: { post: "510", following: "180", followers: "153k" }
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    name: "Kaelen Cross",
    username: "@kaelen_beats",
    bio: "Grammy-nominated multi-instrumentalist, mixing engineer, and sample pack architect. Sending waves from Los Angeles, CA. 🎧",
    stats: { post: "261", following: "640", followers: "88.9k" }
  }
];
    return(
        <div className="Cardbody_Container" >
            {data.map((ele)=>{
                return <Card senddata={ele}/>
            })
            }
        </div>
    )
}
export default PropsTask;