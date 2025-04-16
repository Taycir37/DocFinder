import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-gradient-soft">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-docfinder-primary mb-2">Connexion</h1>
            <p className="text-gray-600">Bienvenue sur DocFinder. Connectez-vous pour accéder à votre compte.</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center text-sm text-gray-600">
            Vous n'avez pas de compte ?{" "}
            <Link href="/register" className="text-docfinder-primary hover:underline font-medium">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-elegant relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Trouvez le médecin idéal en quelques clics</h2>
            <p className="text-white/80 mb-8">
              DocFinder vous permet de trouver facilement des médecins près de chez vous, de prendre rendez-vous en
              ligne et de consulter les avis d'autres patients.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                <div className="text-3xl font-bold">3600+</div>
                <div className="text-white/80">Utilisateurs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-white/80">Médecins</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                <div className="text-3xl font-bold">1200+</div>
                <div className="text-white/80">Rendez-vous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
