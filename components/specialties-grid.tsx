"use client"

import { Heart, Eye, Baby, Bone, Stethoscope, Microscope, SmileIcon as Tooth, UserCircle } from "lucide-react"

const specialties = [
  {
    name: "Médecin généraliste",
    icon: <Stethoscope className="h-10 w-10 text-blue-500" />,
    count: 128,
  },
  {
    name: "Cardiologue",
    icon: <Heart className="h-10 w-10 text-red-500" />,
    count: 64,
  },
  {
    name: "Dermatologue",
    icon: <Microscope className="h-10 w-10 text-purple-500" />,
    count: 42,
  },
  {
    name: "Pédiatre",
    icon: <Baby className="h-10 w-10 text-green-500" />,
    count: 56,
  },
  {
    name: "Ophtalmologue",
    icon: <Eye className="h-10 w-10 text-blue-600" />,
    count: 38,
  },
  {
    name: "Dentiste",
    icon: <Tooth className="h-10 w-10 text-cyan-500" />,
    count: 72,
  },
  {
    name: "Gynécologue",
    icon: <UserCircle className="h-10 w-10 text-pink-500" />,
    count: 45,
  },
  {
    name: "Orthopédiste",
    icon: <Bone className="h-10 w-10 text-amber-500" />,
    count: 33,
  },
]

interface SpecialtiesGridProps {
  onSpecialtySelect?: (specialty: string) => void
  selectedSpecialty?: string | null
}

export function SpecialtiesGrid({ onSpecialtySelect, selectedSpecialty }: SpecialtiesGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {specialties.map((specialty) => (
        <button
          key={specialty.name}
          onClick={() => onSpecialtySelect?.(specialty.name)}
          className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-md ${
            selectedSpecialty === specialty.name
              ? `border-2 border-blue-200 bg-white shadow-md`
              : "border-gray-100 bg-white"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4`}>
              {specialty.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900">{specialty.name}</h3>
          </div>
        </button>
      ))}
    </div>
  )
}
