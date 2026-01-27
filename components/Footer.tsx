import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-padel-green rounded-sm transform rotate-45 flex items-center justify-center">
                                <div className="w-3 h-3 bg-slate-900 rounded-full" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">MEDIA<span className="text-padel-green">PADEL</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Conectando marcas con la pasión del deporte. La red de publicidad en pádel más efectiva de Argentina.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-padel-green text-sm transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-padel-green text-sm transition-colors">Nuestra Red</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-padel-green text-sm transition-colors">Casos de Éxito</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-padel-green text-sm transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-padel-green text-sm transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-padel-green transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-padel-green transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-padel-green transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Media Padel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
