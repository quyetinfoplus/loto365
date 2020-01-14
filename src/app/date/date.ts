export default class DateUtil {
    static getDateCurrent() {
        const date = new Date();
        var month, year, day;

        if (date.getDate() < 10) {
            day = '0' + date.getDate().toString();
        } else {
            day = date.getDate().toString();
        }
        if ((date.getMonth() + 1) < 10) {
            month = '0' + (date.getMonth() + 1).toString();
        } else {
            month = (date.getMonth() + 1).toString();
        }
        year = date.getFullYear();

        return year + '-' + month + '-' + day;
    }

    static getNextDay() {
        const date = new Date();
        var day, month, year;
        if ((date.getDate() === 30 && (date.getMonth() + 1) === 4) || (date.getDate() === 30 && (date.getMonth() + 1) === 6)
            || (date.getDate() === 30 && (date.getMonth() + 1) === 9) || (date.getDate() === 30 && (date.getMonth() + 1) === 11)) {
            day = 1;
            month = date.getMonth() + 1 + 1;
            year = date.getFullYear();
        } else if ((date.getDate() === 31 && (date.getMonth() + 1) === 1) || (date.getDate() === 31 && (date.getMonth() + 1) === 3)
            || (date.getDate() === 31 && (date.getMonth() + 1) === 5) || (date.getDate() === 31 && (date.getMonth() + 1) === 7)
            || (date.getDate() === 31 && (date.getMonth() + 1) === 7) || (date.getDate() === 31 && (date.getMonth() + 1) === 8)
            || (date.getDate() === 31 && (date.getMonth() + 1) === 10) || (date.getDate() === 31 && (date.getMonth() + 1) === 12)) {
            day = 1;
            month = date.getMonth() + 1 + 1;
            year = date.getFullYear();
        } else if (date.getFullYear() % 4 === 0 && (date.getMonth() + 1) === 2 && date.getDate() === 29) {
            day = 1;
            month = date.getMonth() + 1 + 1;
            year = date.getFullYear();
        } else if (date.getFullYear() % 4 !== 0 && (date.getMonth() + 1) === 2 && date.getDate() === 28) {
            day = 1;
            month = date.getMonth() + 1 + 1;
            year = date.getFullYear();
        } else if (date.getDate() === 31 && (date.getMonth() + 1) === 12) {
            day = 1;
            month = 1;
            year = date.getFullYear() + 1;
        } else {
            day = date.getDate() + 1;
            month = date.getMonth() + 1;
            year = date.getFullYear();
        }

        if (day < 10) {
            day = '0' + day.toString();
        } else {
            day = day.toString();
        }

        if (month < 10) {
            month = '0' + month.toString();
        } else {
            month = month.toString();
        }
        return year + '-' + month + '-' + day;
    }

    static getPreviousDay() {
        const date = new Date();
        var day, month, year;

        if ((date.getMonth() + 1) === 2 && date.getDate() === 1 || (date.getMonth() + 1) === 4 && date.getDate() === 1
            || (date.getMonth() + 1) === 6 && date.getDate() === 1 || (date.getMonth() + 1) === 8 && date.getDate() === 1
            || (date.getMonth() + 1) === 9 && date.getDate() === 1 || (date.getMonth() + 1) === 11 && date.getDate() === 1) {
            day = 31;
            month = date.getMonth();
            year = date.getFullYear();
        } else if ((date.getMonth() + 1) === 5 && date.getDate() === 1 || (date.getMonth() + 1) === 7 && date.getDate() === 1
            || (date.getMonth() + 1) === 10 && date.getDate() === 1 || (date.getMonth() + 1) === 12 && date.getDate() === 1) {
            day = 30;
            month = date.getMonth();
            year = date.getFullYear();
        } else if ((date.getMonth() + 1) === 1 && date.getDate() === 1) {
            day = 31;
            month = 12;
            year = date.getFullYear() - 1;
        } else if ((date.getMonth() + 1) === 3 && date.getFullYear() % 4 === 0 && date.getDate() === 1) {
            day = 29;
            month = date.getMonth();
            year = date.getFullYear();
        } else if ((date.getMonth() + 1) === 3 && date.getFullYear() % 4 !== 0 && date.getDate() === 1) {
            day = 28;
            month = date.getMonth();
            year = date.getFullYear();
        } else {
            day = date.getDate() - 1;
            month = date.getMonth() + 1;
            year = date.getFullYear();
        }
        if (day < 10) {
            day = '0' + day.toString();
        } else {
            day = day.toString();
        }

        if (month < 10) {
            month = '0' + month.toString();
        } else {
            month = month.toString();
        }
        return year + '-' + month + '-' + day;
    }
}
