// Script pour initialiser les données dans Back4App
// Exécutez ce script une fois pour créer les classes et ajouter des données de test

const Parse = require("parse/node")

// Configuration de Back4App
const BACK4APP_APPLICATION_ID = "YBahylKUfN5KUJTEx5i78YR7GXmMLF5hbTEnHudl"
const BACK4APP_JAVASCRIPT_KEY = "h2Fz4wXX6C5MQPyhWm7JumYK0eoeUoqjORDSdabs"
const BACK4APP_MASTER_KEY = "VOTRE_MASTER_KEY" // Nécessaire pour créer des classes

// Initialisation de Parse
Parse.initialize(BACK4APP_APPLICATION_ID, BACK4APP_JAVASCRIPT_KEY, BACK4APP_MASTER_KEY)
Parse.serverURL = "https://parseapi.back4app.com"

// Fonction principale
async function initializeData() {
  try {
    console.log("Initialisation des données dans Back4App...")

    // Créer les classes
    await createClasses()

    // Ajouter des données de test
    await addTestData()

    console.log("Initialisation terminée avec succès!")
  } catch (error) {
    console.error("Erreur lors de l'initialisation des données:", error)
  }
}

// Créer les classes dans Back4App
async function createClasses() {
  console.log("Création des classes...")

  // Classe Doctor
  const doctorSchema = new Parse.Schema("Doctor")
  doctorSchema
    .addString("name")
    .addString("specialty")
    .addString("city")
    .addString("address")
    .addString("phone")
    .addNumber("rating")
    .addNumber("reviewCount")
    .addString("availability")
    .addString("imageUrl")
    .addString("bio")
    .addArray("education")
    .addArray("experience")

  // Classe Appointment
  const appointmentSchema = new Parse.Schema("Appointment")
  appointmentSchema
    .addPointer("doctor", "Doctor")
    .addPointer("patient", "_User")
    .addDate("date")
    .addString("time")
    .addString("reason")
    .addString("status")

  // Classe Review
  const reviewSchema = new Parse.Schema("Review")
  reviewSchema
    .addPointer("doctor", "Doctor")
    .addPointer("patient", "_User")
    .addNumber("rating")
    .addString("comment")
    .addDate("date")

  try {
    // Vérifier si les classes existent déjà
    try {
      await doctorSchema.get()
      console.log("La classe Doctor existe déjà")
    } catch (error) {
      await doctorSchema.save()
      console.log("Classe Doctor créée")
    }

    try {
      await appointmentSchema.get()
      console.log("La classe Appointment existe déjà")
    } catch (error) {
      await appointmentSchema.save()
      console.log("Classe Appointment créée")
    }

    try {
      await reviewSchema.get()
      console.log("La classe Review existe déjà")
    } catch (error) {
      await reviewSchema.save()
      console.log("Classe Review créée")
    }
  } catch (error) {
    console.error("Erreur lors de la création des classes:", error)
    throw error
  }
}

// Ajouter des données de test
async function addTestData() {
  console.log("Ajout des données de test...")

  // Ajouter des médecins de test
  const doctors = [
    {
      name: "Sophie Martin",
      specialty: "Cardiologue",
      city: "Paris",
      address: "15 rue de la Paix",
      phone: "01 23 45 67 89",
      rating: 4.9,
      reviewCount: 124,
      availability: "Disponible aujourd'hui",
      imageUrl: "https://example.com/images/doctor-1.jpg",
      bio: "Cardiologue expérimentée spécialisée dans les maladies cardiovasculaires. Je m'engage à fournir des soins de qualité et personnalisés à mes patients.",
      education: [
        {
          degree: "Doctorat en Médecine",
          institution: "Université Paris Descartes",
          year: "2005",
        },
        {
          degree: "Spécialisation en Cardiologie",
          institution: "Hôpital Européen Georges Pompidou",
          year: "2010",
        },
      ],
      experience: [
        {
          position: "Cardiologue",
          institution: "Hôpital Pitié-Salpêtrière",
          startYear: "2010",
          endYear: "2015",
          description: "Prise en charge des patients atteints de maladies cardiovasculaires",
        },
        {
          position: "Cardiologue en cabinet privé",
          institution: "Centre Médical Saint-Michel",
          startYear: "2015",
          endYear: null,
          description: "Consultation et suivi des patients, réalisation d'examens cardiaques",
        },
      ],
    },
    {
      name: "Thomas Dubois",
      specialty: "Dermatologue",
      city: "Lyon",
      address: "8 avenue Victor Hugo",
      phone: "04 56 78 90 12",
      rating: 4.8,
      reviewCount: 98,
      availability: "Disponible demain",
      imageUrl: "https://example.com/images/doctor-2.jpg",
      bio: "Dermatologue passionné par mon métier, je traite toutes les affections de la peau, des cheveux et des ongles. Mon approche est à la fois médicale et esthétique.",
      education: [
        {
          degree: "Doctorat en Médecine",
          institution: "Université Claude Bernard Lyon 1",
          year: "2008",
        },
        {
          degree: "Spécialisation en Dermatologie",
          institution: "Hôpital Édouard Herriot",
          year: "2013",
        },
      ],
      experience: [
        {
          position: "Dermatologue",
          institution: "Centre Hospitalier Lyon Sud",
          startYear: "2013",
          endYear: "2018",
          description: "Diagnostic et traitement des maladies de la peau",
        },
        {
          position: "Dermatologue en cabinet privé",
          institution: "Clinique du Parc",
          startYear: "2018",
          endYear: null,
          description: "Dermatologie médicale et esthétique",
        },
      ],
    },
    {
      name: "Marie Lefevre",
      specialty: "Pédiatre",
      city: "Marseille",
      address: "22 boulevard Gambetta",
      phone: "04 91 23 45 67",
      rating: 4.9,
      reviewCount: 156,
      availability: "Disponible aujourd'hui",
      imageUrl: "https://example.com/images/doctor-3.jpg",
      bio: "Pédiatre dévouée avec plus de 10 ans d'expérience dans le suivi des enfants de la naissance à l'adolescence. Je privilégie une approche bienveillante et préventive.",
      education: [
        {
          degree: "Doctorat en Médecine",
          institution: "Université Aix-Marseille",
          year: "2007",
        },
        {
          degree: "Spécialisation en Pédiatrie",
          institution: "Hôpital de la Timone",
          year: "2012",
        },
      ],
      experience: [
        {
          position: "Pédiatre",
          institution: "Hôpital Nord",
          startYear: "2012",
          endYear: "2016",
          description: "Suivi des enfants et adolescents, urgences pédiatriques",
        },
        {
          position: "Pédiatre en cabinet privé",
          institution: "Centre Médical Castellane",
          startYear: "2016",
          endYear: null,
          description: "Consultations pédiatriques, suivi de croissance, vaccinations",
        },
      ],
    },
    {
      name: "Jean Moreau",
      specialty: "Généraliste",
      city: "Bordeaux",
      address: "5 rue des Lilas",
      phone: "05 56 78 90 12",
      rating: 4.7,
      reviewCount: 87,
      availability: "Disponible demain",
      imageUrl: "https://example.com/images/doctor-4.jpg",
      bio: "Médecin généraliste à l'écoute de mes patients. Je pratique une médecine globale qui prend en compte tous les aspects de la santé, physiques et psychologiques.",
      education: [
        {
          degree: "Doctorat en Médecine",
          institution: "Université de Bordeaux",
          year: "2010",
        },
      ],
      experience: [
        {
          position: "Médecin généraliste",
          institution: "Centre Hospitalier de Bordeaux",
          startYear: "2010",
          endYear: "2014",
          description: "Médecine générale, urgences",
        },
        {
          position: "Médecin généraliste en cabinet privé",
          institution: "Maison de Santé des Chartrons",
          startYear: "2014",
          endYear: null,
          description: "Consultations, suivi des patients, médecine préventive",
        },
      ],
    },
  ]

  // Vérifier si des médecins existent déjà
  const Doctor = Parse.Object.extend("Doctor")
  const query = new Parse.Query(Doctor)
  const existingDoctors = await query.find({ useMasterKey: true })

  if (existingDoctors.length > 0) {
    console.log(`${existingDoctors.length} médecins existent déjà, pas besoin d'en ajouter`)
  } else {
    // Ajouter les médecins
    for (const doctorData of doctors) {
      const doctor = new Doctor()

      for (const [key, value] of Object.entries(doctorData)) {
        doctor.set(key, value)
      }

      await doctor.save(null, { useMasterKey: true })
      console.log(`Médecin ajouté: ${doctorData.name}`)
    }

    console.log(`${doctors.length} médecins ajoutés avec succès`)
  }

  // Ajouter un utilisateur de test si nécessaire
  const query2 = new Parse.Query(Parse.User)
  const existingUsers = await query2.find({ useMasterKey: true })

  if (existingUsers.length > 0) {
    console.log(`${existingUsers.length} utilisateurs existent déjà, pas besoin d'en ajouter`)
  } else {
    const user = new Parse.User()
    user.set("username", "testuser")
    user.set("password", "password123")
    user.set("email", "test@example.com")
    user.set("firstName", "Jean")
    user.set("lastName", "Dupont")
    user.set("phone", "06 12 34 56 78")

    await user.signUp()
    console.log("Utilisateur de test créé")
  }
}

// Exécuter la fonction principale
initializeData()
