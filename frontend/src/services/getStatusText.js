export function getStatusText(status) {
    let statusText;
    switch (status) {
        case 'closed':
            statusText = 'Принято';
            break;
        case 'new':
            statusText = 'Новое';
            break;
        case 'in_progress':
            statusText = 'На проверке';
            break;
        default:
            statusText = 'Ошибка';
    }

    return statusText;
}
