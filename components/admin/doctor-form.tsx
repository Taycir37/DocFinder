"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export function DoctorForm({ doctor = {} }: { doctor?: any }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/admin/doctors")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">Informations générales</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="professional">Informations professionnelles</TabsTrigger>
          <TabsTrigger value="schedule">Horaires</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>Informations de base du médecin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre</Label>
                  <Select defaultValue="dr">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un titre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr">Dr.</SelectItem>
                      <SelectItem value="pr">Pr.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Prénom" defaultValue={doctor.firstName} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Nom" defaultValue={doctor.lastName} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Spécialité</Label>
                  <Select defaultValue={doctor.specialty || "generaliste"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une spécialité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="generaliste">Médecin généraliste</SelectItem>
                      <SelectItem value="cardiologue">Cardiologue</SelectItem>
                      <SelectItem value="dermatologue">Dermatologue</SelectItem>
                      <SelectItem value="pediatre">Pédiatre</SelectItem>
                      <SelectItem value="ophtalmologue">Ophtalmologue</SelectItem>
                      <SelectItem value="dentiste">Dentiste</SelectItem>
                      <SelectItem value="gynécologue">Gynécologue</SelectItem>
                      <SelectItem value="orthopediste">Orthopédiste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biographie</Label>
                <Textarea id="bio" placeholder="Biographie du médecin" rows={5} defaultValue={doctor.bio} />
              </div>

              <div className="space-y-2">
                <Label>Statut</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status" defaultChecked={doctor.status !== "inactive"} />
                  <label
                    htmlFor="status"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Actif
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
              <CardDescription>Coordonnées du médecin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="Téléphone" defaultValue={doctor.phone} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" defaultValue={doctor.email} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Site web</Label>
                  <Input id="website" placeholder="Site web" defaultValue={doctor.website} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" placeholder="Adresse" defaultValue={doctor.address} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input id="city" placeholder="Ville" defaultValue={doctor.city} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input id="postalCode" placeholder="Code postal" defaultValue={doctor.postalCode} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Select defaultValue={doctor.country || "france"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="belgique">Belgique</SelectItem>
                      <SelectItem value="suisse">Suisse</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional">
          <Card>
            <CardHeader>
              <CardTitle>Informations professionnelles</CardTitle>
              <CardDescription>Parcours et services proposés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education">Formation</Label>
                <Textarea
                  id="education"
                  placeholder="Formation (une par ligne)"
                  rows={3}
                  defaultValue={doctor.education?.join("\n")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Expérience</Label>
                <Textarea
                  id="experience"
                  placeholder="Expérience (une par ligne)"
                  rows={3}
                  defaultValue={doctor.experience?.join("\n")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services proposés</Label>
                <Textarea
                  id="services"
                  placeholder="Services (un par ligne)"
                  rows={3}
                  defaultValue={doctor.services?.join("\n")}
                />
              </div>

              <div className="space-y-2">
                <Label>Langues parlées</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["Français", "Anglais", "Espagnol", "Allemand", "Italien", "Arabe", "Chinois", "Portugais"].map(
                    (language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox id={`language-${language}`} defaultChecked={doctor.languages?.includes(language)} />
                        <label htmlFor={`language-${language}`} className="text-sm font-medium leading-none">
                          {language}
                        </label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Assurances acceptées</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["CPAM", "MGEN", "Harmonie Mutuelle", "Allianz", "AXA", "Swiss Life", "Malakoff Humanis"].map(
                    (insurance) => (
                      <div key={insurance} className="flex items-center space-x-2">
                        <Checkbox
                          id={`insurance-${insurance}`}
                          defaultChecked={doctor.insurance?.includes(insurance)}
                        />
                        <label htmlFor={`insurance-${insurance}`} className="text-sm font-medium leading-none">
                          {insurance}
                        </label>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Horaires de travail</CardTitle>
              <CardDescription>Définir les horaires de disponibilité</CardDescription>
            </CardHeader>
            <CardContent>
              {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                <div key={day} className="mb-4 pb-4 border-b last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="capitalize">{day}</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`${day}-active`} defaultChecked={doctor.hours?.[day] !== "Fermé"} />
                      <label htmlFor={`${day}-active`} className="text-sm font-medium leading-none">
                        Ouvert
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`${day}-start`}>Heure d'ouverture</Label>
                      <Select defaultValue="9:00">
                        <SelectTrigger id={`${day}-start`}>
                          <SelectValue placeholder="Heure d'ouverture" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 13 }).map((_, i) => (
                            <SelectItem key={i} value={`${i + 8}:00`}>
                              {`${i + 8}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${day}-end`}>Heure de fermeture</Label>
                      <Select defaultValue="18:00">
                        <SelectTrigger id={`${day}-end`}>
                          <SelectValue placeholder="Heure de fermeture" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 13 }).map((_, i) => (
                            <SelectItem key={i} value={`${i + 12}:00`}>
                              {`${i + 12}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline" type="button" onClick={() => router.push("/admin/doctors")}>
          Annuler
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </div>
    </form>
  )
}
