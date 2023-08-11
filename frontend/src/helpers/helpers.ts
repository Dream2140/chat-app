import {botsData} from "../constants/bots";

export const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';


    hours = hours % 12 || 12;


    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

    return `${hours}:${formattedMinutes} ${ampm}`;
}

export const truncateString = (inputString: string, maxLength: number): string => {
    if (inputString.length <= maxLength) {
        return inputString;
    }

    return inputString.slice(0, maxLength) + '...';
}

export const isBot = (id: string): boolean => {
    return botsData.some(bot => bot._id === id);
}