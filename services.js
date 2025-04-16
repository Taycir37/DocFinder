// Import Parse
import Parse from "parse"

// Services pour interagir avec Back4App

// Service d'authentification
const AuthService = {
  // Inscription d'un nouvel utilisateur
  signUp: async (username, email, password, firstName, lastName, phone) => {
    try {
      const user = new Parse.User()
      user.set("username", username)
      user.set("email", email)
      user.set("password", password)
      user.set("firstName", firstName)
      user.set("lastName", lastName)
      user.set("phone", phone)

      await user.signUp()
      console.log("Utilisateur créé avec succès:", user)
      return {
        id: user.id,
        username: user.get("username"),
        email: user.get("email"),
        firstName: user.get("firstName"),
        lastName: user.get("lastName"),
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error)
      throw error
    }
  },

  // Connexion d'un utilisateur
  login: async (username, password) => {
    try {
      const user = await Parse.User.logIn(username, password)
      console.log("Utilisateur connecté avec succès:", user)
      return {
        id: user.id,
        username: user.get("username"),
        email: user.get("email"),
        firstName: user.get("firstName"),
        lastName: user.get("lastName"),
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error)
      throw error
    }
  },

  // Déconnexion de l'utilisateur
  logout: async () => {
    try {
      await Parse.User.logOut()
      console.log("Utilisateur déconnecté avec succès")
      return true
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error)
      throw error
    }
  },

  // Récupérer l'utilisateur actuellement connecté
  getCurrentUser: () => {
    const user = Parse.User.current()
    if (user) {
      return {
        id: user.id,
        username: user.get("username"),
        email: user.get("email"),
        firstName: user.get("firstName"),
        lastName: user.get("lastName"),
      }
    }
    return null
  },
}

// Service pour les médecins
const DoctorService = {
  // Récupérer tous les médecins
  getAllDoctors: async () => {
    try {
      const Doctor = Parse.Object.extend("Doctor")
      const query = new Parse.Query(Doctor)
      const results = await query.find()

      return results.map((doctor) => ({
        id: doctor.id,
        name: doctor.get("name"),
        specialty: doctor.get("specialty"),
        city: doctor.get("city"),
        address: doctor.get("address"),
        phone: doctor.get("phone"),
        rating: doctor.get("rating"),
        reviewCount: doctor.get("reviewCount"),
        availability: doctor.get("availability"),
        imageUrl: doctor.get("imageUrl"),
        bio: doctor.get("bio"),
        education: doctor.get("education"),
        experience: doctor.get("experience"),
      }))
    } catch (error) {
      console.error("Erreur lors de la récupération des médecins:", error)
      throw error
    }
  },

  // Rechercher des médecins par ville et spécialité
  searchDoctors: async (city, specialty) => {
    try {
      const Doctor = Parse.Object.extend("Doctor")
      const query = new Parse.Query(Doctor)

      if (city) {
        query.equalTo("city", city)
      }

      if (specialty) {
        query.equalTo("specialty", specialty)
      }

      const results = await query.find()

      return results.map((doctor) => ({
        id: doctor.id,
        name: doctor.get("name"),
        specialty: doctor.get("specialty"),
        city: doctor.get("city"),
        address: doctor.get("address"),
        phone: doctor.get("phone"),
        rating: doctor.get("rating"),
        reviewCount: doctor.get("reviewCount"),
        availability: doctor.get("availability"),
        imageUrl: doctor.get("imageUrl"),
        bio: doctor.get("bio"),
        education: doctor.get("education"),
        experience: doctor.get("experience"),
      }))
    } catch (error) {
      console.error("Erreur lors de la recherche des médecins:", error)
      throw error
    }
  },

  // Récupérer un médecin par son ID
  getDoctorById: async (doctorId) => {
    try {
      const Doctor = Parse.Object.extend("Doctor")
      const query = new Parse.Query(Doctor)
      const doctor = await query.get(doctorId)

      return {
        id: doctor.id,
        name: doctor.get("name"),
        specialty: doctor.get("specialty"),
        city: doctor.get("city"),
        address: doctor.get("address"),
        phone: doctor.get("phone"),
        rating: doctor.get("rating"),
        reviewCount: doctor.get("reviewCount"),
        availability: doctor.get("availability"),
        imageUrl: doctor.get("imageUrl"),
        bio: doctor.get("bio"),
        education: doctor.get("education"),
        experience: doctor.get("experience"),
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du médecin:", error)
      throw error
    }
  },
}

// Service pour les rendez-vous
const AppointmentService = {
  // Créer un nouveau rendez-vous
  createAppointment: async (doctorId, date, time, reason) => {
    try {
      const currentUser = Parse.User.current()
      if (!currentUser) {
        throw new Error("Vous devez être connecté pour prendre un rendez-vous")
      }

      const Doctor = Parse.Object.extend("Doctor")
      const doctor = new Doctor()
      doctor.id = doctorId

      const Appointment = Parse.Object.extend("Appointment")
      const appointment = new Appointment()

      appointment.set("doctor", doctor)
      appointment.set("patient", currentUser)
      appointment.set("date", new Date(date))
      appointment.set("time", time)
      appointment.set("reason", reason)
      appointment.set("status", "pending")

      await appointment.save()

      return {
        id: appointment.id,
        doctorId: doctorId,
        date: appointment.get("date"),
        time: appointment.get("time"),
        reason: appointment.get("reason"),
        status: appointment.get("status"),
      }
    } catch (error) {
      console.error("Erreur lors de la création du rendez-vous:", error)
      throw error
    }
  },

  // Récupérer les rendez-vous de l'utilisateur connecté
  getUserAppointments: async () => {
    try {
      const currentUser = Parse.User.current()
      if (!currentUser) {
        throw new Error("Vous devez être connecté pour voir vos rendez-vous")
      }

      const Appointment = Parse.Object.extend("Appointment")
      const query = new Parse.Query(Appointment)
      query.equalTo("patient", currentUser)
      query.include("doctor")

      const results = await query.find()

      return results.map((appointment) => {
        const doctor = appointment.get("doctor")
        return {
          id: appointment.id,
          doctor: {
            id: doctor.id,
            name: doctor.get("name"),
            specialty: doctor.get("specialty"),
          },
          date: appointment.get("date"),
          time: appointment.get("time"),
          reason: appointment.get("reason"),
          status: appointment.get("status"),
        }
      })
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous:", error)
      throw error
    }
  },
}

// Service pour les avis
const ReviewService = {
  // Ajouter un avis sur un médecin
  addReview: async (doctorId, rating, comment) => {
    try {
      const currentUser = Parse.User.current()
      if (!currentUser) {
        throw new Error("Vous devez être connecté pour laisser un avis")
      }

      const Doctor = Parse.Object.extend("Doctor")
      const doctor = new Doctor()
      doctor.id = doctorId

      const Review = Parse.Object.extend("Review")
      const review = new Review()

      review.set("doctor", doctor)
      review.set("patient", currentUser)
      review.set("rating", rating)
      review.set("comment", comment)
      review.set("date", new Date())

      await review.save()

      // Mettre à jour la note moyenne du médecin
      await updateDoctorRating(doctorId)

      return {
        id: review.id,
        doctorId: doctorId,
        rating: review.get("rating"),
        comment: review.get("comment"),
        date: review.get("date"),
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis:", error)
      throw error
    }
  },

  // Récupérer les avis d'un médecin
  getDoctorReviews: async (doctorId) => {
    try {
      const Doctor = Parse.Object.extend("Doctor")
      const doctor = new Doctor()
      doctor.id = doctorId

      const Review = Parse.Object.extend("Review")
      const query = new Parse.Query(Review)
      query.equalTo("doctor", doctor)
      query.include("patient")
      query.descending("date")

      const results = await query.find()

      return results.map((review) => {
        const patient = review.get("patient")
        return {
          id: review.id,
          patient: {
            id: patient.id,
            firstName: patient.get("firstName"),
            lastName: patient.get("lastName"),
          },
          rating: review.get("rating"),
          comment: review.get("comment"),
          date: review.get("date"),
        }
      })
    } catch (error) {
      console.error("Erreur lors de la récupération des avis:", error)
      throw error
    }
  },
}

// Fonction utilitaire pour mettre à jour la note moyenne d'un médecin
async function updateDoctorRating(doctorId) {
  try {
    const Doctor = Parse.Object.extend("Doctor")
    const doctor = new Doctor()
    doctor.id = doctorId

    const Review = Parse.Object.extend("Review")
    const query = new Parse.Query(Review)
    query.equalTo("doctor", doctor)

    const results = await query.find()

    if (results.length === 0) return

    const totalRating = results.reduce((sum, review) => sum + review.get("rating"), 0)
    const averageRating = totalRating / results.length

    const doctorQuery = new Parse.Query(Doctor)
    const doctorToUpdate = await doctorQuery.get(doctorId)

    doctorToUpdate.set("rating", averageRating)
    doctorToUpdate.set("reviewCount", results.length)

    await doctorToUpdate.save()
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la note du médecin:", error)
    throw error
  }
}

// Exporter les services
window.AuthService = AuthService
window.DoctorService = DoctorService
window.AppointmentService = AppointmentService
window.ReviewService = ReviewService
