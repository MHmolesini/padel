export default function SocialProof() {
    return (
        <section className="py-12 bg-slate-950/50 border-y border-white/5">
            <div className="container px-4 mx-auto text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
                    Las marcas líderes ya juegan en nuestra cancha
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos using text for now as I can't generate images directly here easily without external assets, 
           or I could use Lucide icons to simulate logos or just text blocks */}

                    {['TECH', 'BEBIDAS', 'AUTOS', 'BANCOS'].map((brand, i) => (
                        <div key={i} className="text-2xl font-black text-slate-400 hover:text-white transition-colors cursor-default">
                            {brand}<span className="text-padel-green">.</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
