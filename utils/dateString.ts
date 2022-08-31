export default function dateString(dateString: string) {

    const year = dateString.substring(4, 8);
    const month = dateString.substring(2, 4);
    const day = dateString.substring(0, 2);
    
    const date = new Date(year, month, day);

    return date;

}