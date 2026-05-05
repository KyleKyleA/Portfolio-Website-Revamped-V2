import { Children } from "react";
import { useNavigate } from "react-router-dom";

export function CardTitle({children}) {
    return (
        <h3 className="text-white text-xl font-semibold mb-2 text-left">
            {children}
        </h3>
    )
}

export function CardHeader({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

export function CardContent({children}) {

    return (
        <div className="mt-4 text-left">
            {children}
        </div>
    )
}

export function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
      }}
    >
      {children}
    </div>
  )
}

export function SkillsCard({title, description, link}) {


    const navigate = useNavigate();


    return (

        <div onClick={() => navigate(link)} className="border-white/10 rounded-lg p-6 cursor-pointer hover:bg-primary/30 transition duration-300">
                
                
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{description}</p>
            
        </div>
    )
}


export default Card; 
