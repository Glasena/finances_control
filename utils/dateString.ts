export default function dateString(dateString: string) {

    const year = parseInt(dateString.substring(4, 8));
    const month = parseInt(dateString.substring(2, 4));
    const day = parseInt(dateString.substring(0, 2));

    const date = Date.UTC(year, month, day);

    return date;

}