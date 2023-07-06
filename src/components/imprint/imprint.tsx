export default function Imprint() {
    return (
        <div>
            <div
                className={'mt-3 font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800'}>
                Impressum
            </div>
            <div className={'col-span-2 grid md:grid-cols-2 mt-3 mb-5'}>
                <div className="text-center mt-3">
                    <p className="font-semibold">Herr Kraut</p>
                    <p className="font-semibold">Frau Rüben</p>
                    <p className="font-semibold">Dr GmbH</p>
                    <p className="font-normal">Musterstraße 123</p>
                    <p className="font-normal">12345 Musterstadt</p>
                    <p className="font-normal">Deutschland</p>
                    <p className="font-normal">Telefon: 0123456789</p>
                    <p className="font-normal">E-Mail: info@beispiel.de</p>

                </div>
                <div className={'text-center mt-3'}>
                    <p className="font-semibold">Kraut und Rüben GmbH</p>
                    <p className="font-normal">Musterstraße 123</p>
                    <p className="font-normal">12345 Musterstadt</p>
                    <p className="font-normal">Deutschland</p>
                    <p className="font-normal">Telefon: 0123456789</p>
                    <p className="font-normal">E-Mail: info@beispiel.de</p>
                    <p className="font-normal">Handelsregister: Amtsgericht Musterstadt, HRB 12345</p>
                    <p className="font-normal">Umsatzsteuer-Identifikationsnummer: DE123456789</p>
                </div>
            </div>
            <div className={'text-xl font-bold mt-3'}>Contracts:</div>
            <div>For safety reasons we only make EVB-IT Contracts</div>
            <div className={'grid grid-cols-2 mt-3'}>
                <div>
                    <div className={'text-lg underline'}>Contracts for buying</div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/basisvertraege/kauf/kauf-agb.pdf;jsessionid=EAC26B4435A806A53E53712F4AC7CA79.2_cid364?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-IT Kauf-AGB
                        </a>
                    </div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/basisvertraege/kauf/kaufvertrag-langfassung.pdf;jsessionid=EAC26B4435A806A53E53712F4AC7CA79.2_cid364?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-IT Kaufvertrag-Langfassung
                        </a>
                    </div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/basisvertraege/kauf/kaufvertrag-kurzfassung.pdf;jsessionid=EAC26B4435A806A53E53712F4AC7CA79.2_cid364?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-IT Kaufvertrag-Kurzfassung
                        </a>
                    </div>
                </div>
                <div>
                    <div className={'text-lg underline'}>Contracts for renting</div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/noch-geltende-bvb/agb-miete.pdf?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-BVB AGB Miete
                        </a>
                    </div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/noch-geltende-bvb/bvb-vertracksdeckblatt-miete.docx?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-BVB BV-Vertracksdeckblatt Miete
                        </a>
                    </div>
                    <div>
                        <a href={'https://www.cio.bund.de/SharedDocs/downloads/Webs/CIO/DE/digitale-loesungen/it-beschaffung/evb-it-bvb/noch-geltende-bvb/mietschein-doc.docx?__blob=publicationFile&v=1'}
                           className={'hover:underline'}>
                            EVB-BVB Mietschein-Doc
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}
