function Footer() {
    return (
        <footer className="w-full h-24 md:h-32 flex flex-col justify-center items-center text-sm text-center bg-gray-300">
            <p>© 2026 - Desenvolvido pela Equipe Sistema Clima</p>
            <p className="mt-1">
                <a
                    className="text-sm hover:text-gray-600 transition-colors"
                    href="https://github.com/FelipeCaetanoSS"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <span className="mx-2">|</span>
                <a
                    className="text-sm hover:text-gray-600 transition-colors"
                    href="https://br.linkedin.com/in/felipe-caetano-silva-dos-santos-55a620215"
                    target="_blank"
                    rel="noreferrer"
                >
                    Linkedin
                </a>
            </p>
        </footer>
    );
}

export default Footer;