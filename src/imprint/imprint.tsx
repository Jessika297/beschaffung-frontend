export default function Imprint() {
    return (
        <div className={'grid grid-cols-2'}>
            <span
                className={'mt-3 font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800 col-span-2'}>Impressum</span>
            <div className={'col-span-2 grid md:grid-cols-2 mt-3'}>
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
        </div>
    );
}
