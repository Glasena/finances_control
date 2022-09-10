export default function dateString(dateString: string) {

    const year = dateString.substring(4, 8);
    const month = dateString.substring(2, 4);
    const day = dateString.substring(0, 2);

    const sDate = year + "-" + month + "-" + day;

    const date = new Date(sDate);

    return date;

}