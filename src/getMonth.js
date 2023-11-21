export function getMonth(month) {
    switch (month) {
        case '12':
            return 'Декабрь';
        case '1':
            return 'Январь';
        case '2':
            return 'Февраль';
        case '11':
            return 'Зима близко';
        default:
            return 'До зимы еще далеко';
    }
}