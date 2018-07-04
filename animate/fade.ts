import styles from './fade.scss';


export default {
    getClassName(status:string) {
        console.log(status);
        return styles[status];
    }
}