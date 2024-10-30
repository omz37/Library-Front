import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        resources: {
            fr: {
                translation: {
                    "loginPage": {
                        "title": "Bienvenue à la Bibliothèque de Trou-Perdu sur Isère",
                        "subTitle": "Veuillez vous connecter pour accéder à nos collections",
                        "emailLabel": "Adresse e-mail",
                        "passwordLabel": "Mot de passe",
                        "errorLoginForm": "Veuillez entrer un email valide",
                        "errorLoginCredentials": "Identifiants erronés, veuillez rééssayer",
                        "successLogin": "Connexion réussie",
                        "loginBtn": "Connexion",
                        "createBtn": "Créer un compte"
                    },
                    "createPage": {
                        "title": "Bienvenue à la Bibliothèque Trou-Perdu sur Isère",
                        "subTitle": "Création de compte",
                        "name": "Votre prénom",
                        "family": "Votre nom de famille",
                        "email": "Adresse e-mail",
                        "password": "Mot de passe",
                        "confirmPassword": "Confirmez votre mot de passe",
                        "errorForm": "Veuillez remplir tous les champs !",
                        "errorPassword": "Veuillez entrer un mot de passe valide contenant une lettre, un chiffre et un caractère spécial",
                        "errorPasswordLength": "Votre mot de passe doit contenir entre 8 et 15 caractères",
                        "errorNameLength": "Votre nom doit contenir entre 3 et 64 caractères",
                        "errorConfirmPassword": "Les mots de passe ne correspondent pas",
                        "errorEmail": "Veuillez entrer une adresse e-mail valide",
                        "errorUnique": "Un compte avec cette adresse e-mail existe déjà",
                        "errorMissingFields": "Veuillez remplir tous les champs requis !",
                        "success": "Création de compte réussie",
                        "submitBtn": "Créer un compte"
                    },
                    "header": {
                        "connected": "Connecté",
                        "account": "Mon compte",
                        "ourBooks": "Nos livres",
                        "home": "Accueil",
                    },
                    "footer": {
                        "rules": "Règlement",
                        "schedule": "Horaires",
                        "cgu": "CGU"
                    },
                    "account": {
                        "title": "Mon Compte",
                        "name": "Prénom: ",
                        "familyName": "Nom: ",
                        "email": "Email: ",
                        "id": "ID: ",
                        "edit": "Editer le profil",
                        "editSuccess": "Votre compte a bien été modifé",
                        "editFailed": "Modification échouée ! Champs non valides",
                        "logout": "Se déconnecter",
                        "rents": "Livres empruntés: ",
                        "status": "Status: "
                    },
                    "btn": {
                        "submit": "Soumettre",
                        "cancel": "Annuler",
                        "collection": "Voir nos collections",
                        "rent": {
                            "true": "Indisponible",
                            "false": "Emprunter le livre"
                        },
                        "status": {
                            "false": "Autoriser l'emprunt",
                            "true": "Interdire l'emprunt"
                        }
                    },
                    "category": {
                        "title": "Nos catégories",
                       "litterature": "Littérature",
                        "bd": "Bande-dessiné",
                        "utils": "Utilitaire/Voyage",
                        "kids": "Jeunesse"
                    },
                    "books": {
                        "mainTitle": "Nos livres",
                        "author": "Auteur",
                        "title": "Titre",
                        "date": "Date de publication",
                        "image": "Image de couverture",
                        "available": "Disponibilité",
                        "bookError": "Erreur lors de la récupération du livre !",
                        "bookNotFound": "Le livre que vous cherchez n'existe pas !"
                    },
                    "rent": {
                        "success": "Livre emprunté",
                        "unauthorized": "Vous n'êtes pas autorisé à emprunter pour le moment, veuillez patienter",
                        "error": "Une erreur s'est produite !"
                    },
                    "pagination": {
                        "page": "Page : ",
                        "items": "Éléments par page : "
                    },
                    "admin": {
                        "title": "Nos utilisateurs : ",
                        "error": "Page réservée aux administrateurs uniquement !",
                        "editSuccess": "Modification réussie",
                        "editError": "Échec de la modification !",
                        "searchPoint": ".",
                        "searchPlaceholder": "Rechercher un utilisateur par nom, prénom ou email ....",
                        "searchBtn": "Rechercher"
                    }
                }
            },
            en: {
                translation: {
                    "loginPage": {
                        "title": "Welcome to the Trou-Perdu sur Isère Library",
                        "subTitle": "Please log in to access our collections",
                        "emailLabel": "Email Address",
                        "passwordLabel": "Password",
                        "errorLoginForm": "Please enter a valid email",
                        "errorLoginCredentials": "Invalid credentials please try again",
                        "successLogin": "Login successful",
                        "loginBtn": "Login",
                        "createBtn": "Create an account"
                    },
                    "createPage": {
                        "title": "Welcome to the Trou-Perdu sur Isère Library",
                        "subTitle": "Account creation",
                        "name": "Your name",
                        "family": "Your family name",
                        "email": "Email Address",
                        "password": "Password",
                        "confirmPassword": "Confirm your password",
                        "errorForm": "Please fill all fields !",
                        "errorPassword": "Please enter a valid password containing one of each: letter, number and special character",
                        "errorPasswordLength": "Password must be between 8 and 15 characters",
                        "errorNameLength": "Name must be between 3 and 64 characters",
                        "errorConfirmPassword": "Password does not match",
                        "errorEmail": "Please enter a valid email",
                        "errorUnique": "Account with this email already exists",
                        "errorMissingFields": "Please fill all the required fields !",
                        "success": "Login successful",
                        "submitBtn": "Create an account"
                    },
                    "header": {
                        "connected": "Connected",
                        "account": "My account",
                        "ourBooks": "Our books",
                        "home": "Home",
                        "admin": "Admin"
                    },
                    "footer": {
                        "rules": "Our rules",
                        "schedule": "Schedule",
                        "cgu": "CGU"
                    },
                    "account": {
                        "title": "My Account",
                        "name": "Name: ",
                        "familyName": "Family Name: ",
                        "email": "Email: ",
                        "id": "ID: ",
                        "edit": "Edit profile",
                        "editSuccess": "Account modified successfully",
                        "editFailed": "Account modification failed ! Please check the info again",
                        "logout": "Logout",
                        "rents": "Rented books: ",
                        "status": "Status: "
                    },
                    "btn": {
                        "submit": "Submit",
                        "cancel": "Cancel",
                        "collection": "See our collections",
                        "rent": {
                            "true": "Unavailable",
                            "false": "Rent book"
                        },
                        "status": {
                            "false": "Allow rent",
                            "true": "Forbid rent"
                        }
                    },
                    "category": {
                        "title": "Our categories",
                        "litterature": "Litterature",
                        "bd": "Comics",
                        "utils": "Travel",
                        "kids": "Kids"
                    },
                    "books": {
                        "mainTitle": "Our books ",
                        "author": "Author ",
                        "title": "Title ",
                        "date": "Publish date ",
                        "image": "Cover image ",
                        "available": "Availability ",
                        "bookError": "Error while retrieving th book !",
                        "bookNotFound": "The book you are looking for, does not exist !"
                    },
                    "rent" : {
                        "success": "Book rented",
                        "unauthorized": "You are not authorized to rent yet, please wait",
                        "error": "An error happened !"
                    },
                    "pagination": {
                        "page": "Page: ",
                        "items": "Items per page: "
                    },
                    "admin": {
                        "title": "Our users: ",
                        "error": "Admin only page !",
                        "editSuccess": "Edit successful",
                        "editError": "Error edit failed !",
                        "searchPoint": ".",
                        "searchPlaceholder": "Find a user by name, family or email ....",
                        "searchBtn": "Find"
                    }
                }
            }
        },
    });
export default i18n;
