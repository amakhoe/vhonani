import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
const feat = [
    "Administracao de redes",
    "sistemas de gestao",
    "resolucao de confiltos",
    "salvar o mundo das forcas do mal"
];
export default function Feature(){
    return(
        <section className="text-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Servicos</Tag>
                </div>
            
                <h2 className="text-6xl font-medium text-center">Where Power meets <span className="text-lime-400">Simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <FeatureCard title="Real Time Collaborations" description="Work Hard bla" className="col-span-2"></FeatureCard>
                    <FeatureCard title="Real Time Collaborations" description="Work Hard bla" className="col-span-2">
                        <div className="aspect-video flex justify-center items-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                Alcancamos grandes resultados este ano
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Real Time Collaborations" description="Work Hard bla" className="col-span-2 col-start-2"></FeatureCard>
                    
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {feat.map((feature) => (
                        <div key={feature} className="bg-neutral-900 border
                        border-white/10 inline-flex px-3 py-1.5 rounded-2xxl gap-3
                        items-center">
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full
                            inline-flex items-center justify-center
                            text-xl">&#10038;</span>
                            <span className="font-medium">{feature}</span>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}