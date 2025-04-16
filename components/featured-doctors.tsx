import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from "lucide-react"

const featuredDoctors = [
  {
    id: 1,
    name: "Dr. Sami Ben Ali",
    specialty: "Cardiologue",
    city: "Tunis",
    rating: 4.9,
    reviews: 124,
    image: "/caring-tunisian-doctor.png",
  },
  {
    id: 2,
    name: "Dr. Leila Trabelsi",
    specialty: "Dermatologue",
    city: "Sousse",
    rating: 4.8,
    reviews: 98,
    image: "/tunisian-doctor-consultation.png",
  },
  {
    id: 3,
    name: "Dr. Nadia Mejri",
    specialty: "Pédiatre",
    city: "Sfax",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?key=pld2d",
  },
  {
    id: 4,
    name: "Dr. Karim Belhaj",
    specialty: "Généraliste",
    city: "Tunis",
    rating: 4.7,
    reviews: 87,
    image: "/caring-tunisian-doctor.png",
  },
]

export function FeaturedDoctors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredDoctors.map((doctor) => (
        <Link href={`/doctors/${doctor.id}`} key={doctor.id}>
          <Card className="h-full hover:shadow-card-hover transition-shadow duration-300 rounded-xl overflow-hidden border-none">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-docfinder-primary">{doctor.name}</h3>
                <p className="text-docfinder-secondary font-medium">{doctor.specialty}</p>

                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({doctor.reviews} avis)</span>
                </div>

                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-docfinder-primary" />
                  <span className="truncate">{doctor.city}</span>
                </div>

                <div className="mt-3 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-docfinder-secondary" />
                  <Badge
                    variant="outline"
                    className="text-docfinder-secondary border-docfinder-secondary bg-docfinder-secondary/10"
                  >
                    Disponible aujourd'hui
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
