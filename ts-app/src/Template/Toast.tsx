/** Postion prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type verticalPosition = 'top' | 'center' | 'bottom'

type ToastPRops = {
    position: `${HorizontalPosition}-${verticalPosition}`
}

export const Toast = ({ position }: ToastPRops) => {
    return <div>
        Toast Notification Position - {position}
    </div>
}