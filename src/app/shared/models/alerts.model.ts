
export const alertType = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger'
};

export interface Alert {
    type: string;
    message: string;
}
