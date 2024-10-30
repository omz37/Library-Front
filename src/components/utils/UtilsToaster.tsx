import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toaster.scss'

/**
 * Affiche un message toast à l'utilisateur.
 *
 * @param {string} message - Le message à afficher dans le toast.
 * @param {boolean} isError - Indique si le toast est une erreur (true) ou une notification de succès (false).
 * @returns {void} - Ne renvoie rien (void).
 */
export const showToast = (message: string, isError: boolean) : void => {

    const toastOptions: {} = {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster-background"
    }

    toast[isError ? 'error' : 'success'](message, toastOptions);
};
